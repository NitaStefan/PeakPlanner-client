import { useRef, useState } from "react"
import persistActivity from "../../utils/restApiRequests/persistActivity"
import updateActivity from "../../utils/restApiRequests/updateActivity"
import Close from "../icons/Close"
import useClickOutside from "../hooks/useClickOutside"
import getIntervalErrorMsg from "../../utils/getIntervalErrorMsg"
import getProperInitialTimes from "../../utils/getProperInitialTimes"
import Tooltip from "../Tooltip"

const ActivityForm = ({ planId, setPlans, closeForm, theActivity, isDaily, minTime, maxTime }) => {
  const activityFormRef = useRef(null)

  const [isChoosingTime, setIsChoosingTime] = useState(false)

  const [initialStartTime, initialEndTime] = getProperInitialTimes(theActivity, isDaily, minTime)

  const [formValues, setFormValues] = useState({
    startTime: initialStartTime,
    endTime: initialEndTime,
    name: theActivity?.name || "",
    priority: theActivity?.priority || "OPTIONAL",
  })

  const handleChange = (field, value) => {
    setFormValues(prev => ({ ...prev, [field]: value }))
  }

  const formMode = theActivity ? "UPDATE" : "ADD"

  const addTheActivity = async () => {
    const dbActivity = await persistActivity(formValues, planId)

    setPlans(prevPlans =>
      prevPlans.map(plan =>
        plan.id === planId ? { ...plan, activities: [...plan.activities, dbActivity] } : plan
      )
    )
  }

  const updateTheActivity = () => {
    setPlans(prevPlans =>
      prevPlans.map(plan =>
        plan.id === planId
          ? {
              ...plan,
              activities: plan.activities.map(activity =>
                activity.id === theActivity.id
                  ? {
                      id: activity.id,
                      steps: activity.steps,
                      ...formValues,
                    }
                  : activity
              ),
            }
          : plan
      )
    )
    // let the activity update in the meantime
    updateActivity(formValues, theActivity.id)
  }

  const handleAction = formMode === "ADD" ? addTheActivity : updateTheActivity

  //TODO make sure the total duration does not surpass the interval time
  const isCorrectInterval =
    (minTime === null ||
      (isDaily ? formValues.startTime >= minTime : formValues.startTime > minTime)) &&
    formValues.startTime < formValues.endTime &&
    (maxTime === null || (isDaily ? formValues.endTime <= maxTime : formValues.endTime < maxTime))

  const intervalErrorMsg = getIntervalErrorMsg(
    minTime,
    maxTime,
    isDaily,
    formValues.startTime,
    formValues.endTime
  )

  useClickOutside(activityFormRef, () => setIsChoosingTime(false))
  useClickOutside(activityFormRef, () => closeForm(), isChoosingTime)

  console.log(isChoosingTime)

  return (
    <div ref={activityFormRef} className="test-container">
      <div
        className={`inline-block relative ${
          !isCorrectInterval && "outline outline-red-600 outline-4"
        }`}
      >
        <Tooltip isVisible={!isCorrectInterval} type={"ERROR"} content={intervalErrorMsg} />
        <IntervalInput
          value={formValues.startTime}
          onChange={value => handleChange("startTime", value)}
          type={isDaily ? "time" : "date"}
          setIsChoosingTime={setIsChoosingTime}
        />
        <div>to</div>
        <IntervalInput
          value={formValues.endTime}
          onChange={value => handleChange("endTime", value)}
          type={isDaily ? "time" : "date"}
          setIsChoosingTime={setIsChoosingTime}
        />
      </div>
      <div className="inline-block ml-6">
        <NameInput value={formValues.name} onChange={value => handleChange("name", value)} />
      </div>
      <div className="inline-block ml-6">
        <PriorityInput
          value={formValues.priority}
          onChange={value => handleChange("priority", value)}
        />
      </div>
      <button
        onClick={() => {
          handleAction()
          closeForm()
        }}
        className={`test-container ml-8 ${
          (!isCorrectInterval || formValues.name == "") && "bg-gray-600"
        }`}
        disabled={!isCorrectInterval || formValues.name === ""}
      >
        {formMode}
      </button>
      <button onClick={() => closeForm()} className="float-right">
        <Close />
      </button>
    </div>
  )
}

// The form components
const IntervalInput = ({ value, onChange, type, setIsChoosingTime }) => {
  return (
    <input
      className={"text-black rounded"}
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      onFocus={() => setIsChoosingTime(true)}
    />
  )
}

const NameInput = ({ value, onChange }) => {
  return (
    <>
      <label className="block w-fit" htmlFor="activityName">
        Name of the activity
      </label>
      <input
        className="text-black pl-2"
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        id="activityName"
        autoComplete="off"
        placeholder="Set the Activity Name"
      />
    </>
  )
}

const PriorityInput = ({ value, onChange }) => {
  return (
    <>
      <label className="block w-fit" htmlFor="thePriority">
        Choose priority
      </label>
      <select
        className="text-black"
        id="thePriority"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option value="HIGH">high</option>
        <option value="MEDIUM">medium</option>
        <option value="LIGHT">light</option>
        <option value="OPTIONAL">optional</option>
      </select>
    </>
  )
}

export default ActivityForm
