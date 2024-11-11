import { useRef, useState } from "react"
import persistActivity from "../../utils/restApiRequests/persistActivity"
import updateActivity from "../../utils/restApiRequests/updateActivity"
import Close from "../icons/Close"
import useClickOutside from "../hooks/useClickOutside"

const ActivityForm = ({ planId, setPlans, closeForm, theActivity, isDaily }) => {
  const activityFormRef = useRef(null)

  // interval input
  const minTime = isDaily ? "09:00" : "2024-11-01"
  const maxTime = isDaily ? "19:00" : "2024-11-15"
  const [theStartTime, setTheStartTime] = useState(theActivity?.startTime || minTime)
  const [theEndTime, setTheEndTime] = useState(theActivity?.endTime || maxTime)

  // name input
  const [theName, setTheName] = useState(theActivity?.name || "")

  // priority input
  const [thePriority, setThePriority] = useState(theActivity?.priority || "OPTIONAL")

  const formMode = theActivity ? "UPDATE" : "ADD"

  const newActivity = {
    startTime: theStartTime,
    endTime: theEndTime,
    name: theName,
    priority: thePriority,
  }

  const isCorrectInterval =
    theStartTime >= minTime && theStartTime < theEndTime && theEndTime <= maxTime

  const addTheActivity = async () => {
    const dbActivity = await persistActivity(newActivity, planId)

    setPlans(prevPlans =>
      prevPlans.map(plan =>
        plan.id === planId
          ? { ...plan, activities: [...(plan.activities || []), dbActivity] }
          : plan
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
                      ...activity,
                      startTime: theStartTime,
                      endTime: theEndTime,
                      name: theName,
                      priority: thePriority,
                    }
                  : activity
              ),
            }
          : plan
      )
    )
    // let the activity update in the meantime
    updateActivity(newActivity, theActivity.id)
  }

  const handleAction = formMode === "ADD" ? addTheActivity : updateTheActivity

  useClickOutside(activityFormRef, () => closeForm())

  return (
    <div ref={activityFormRef} className="test-container">
      <div className={`inline-block ${!isCorrectInterval && "outline outline-red-600 outline-4"}`}>
        <IntervalInput theTime={theStartTime} setTheTime={setTheStartTime} isDaily={isDaily} />
        <div>to</div>
        <IntervalInput theTime={theEndTime} setTheTime={setTheEndTime} isDaily={isDaily} />
      </div>
      <div className="inline-block ml-6">
        <NameInput theName={theName} setTheName={setTheName} />
      </div>
      <div className="inline-block ml-6">
        <PriorityInput thePriority={thePriority} setThePriority={setThePriority} />
      </div>
      <button
        onClick={() => {
          handleAction()
          closeForm()
        }}
        className={`test-container ml-8 ${(!isCorrectInterval || theName == "") && "bg-gray-600"}`}
        disabled={!isCorrectInterval || theName === ""}
      >
        {formMode}
      </button>
      <button onClick={() => closeForm()} className="float-right">
        <Close />
      </button>
    </div>
  )
}

const IntervalInput = ({ theTime, setTheTime, isDaily }) => {
  const handleInput = e => setTheTime(e.target.value)

  return (
    <input
      className={"text-black rounded"}
      type={isDaily ? "time" : "date"}
      value={theTime}
      onChange={handleInput}
    />
  )
}

const NameInput = ({ theName, setTheName }) => {
  const handleName = e => {
    setTheName(e.target.value)
  }

  return (
    <>
      <label className="block w-fit" htmlFor="activityName">
        Name of the activity
      </label>
      <input
        className="text-black pl-2"
        type="text"
        value={theName}
        onChange={handleName}
        id="activityName"
      />
    </>
  )
}

const PriorityInput = ({ thePriority, setThePriority }) => {
  const handlePriority = e => {
    setThePriority(e.target.value)
  }

  return (
    <>
      <label className="block w-fit" htmlFor="thePriority">
        Choose priority
      </label>
      <select className="text-black" id="thePriority" value={thePriority} onChange={handlePriority}>
        <option value="HIGH">high</option>
        <option value="MEDIUM">medium</option>
        <option value="LIGHT">light</option>
        <option value="OPTIONAL">optional</option>
      </select>
    </>
  )
}

export default ActivityForm
