import { useRef, useState } from "react"
import useClickOutside from "./hooks/useClickOutside"
import updateDbStep from "../utils/restApiRequests/updateStep"
import persistStep from "../utils/restApiRequests/persistStep"
import getInitialStepValues from "../utils/getInitialStepValues"
import removeZeroTimeValues from "../utils/removeZeroTimeValues"
import addDurationStrings from "../utils/addDurationStrings"
import extractDurationParts from "../utils/extractDurationParts"

const StepForm = ({ closeForm, theStep, isDaily, planId, activityId, setPlans, stepsTimeLeft }) => {
  const stepFormRef = useRef(null)

  const [initDays, initHours, initMinutes, initDescription] = getInitialStepValues(theStep, isDaily)

  const [hours, setHours] = useState(initHours)
  const [minutes, setMinutes] = useState(initMinutes)
  const [days, setDays] = useState(initDays)
  const [description, setDescription] = useState(initDescription)

  const handleHoursChange = event => setHours(parseInt(event.target.value))
  const handleMinutesChange = event => setMinutes(parseInt(event.target.value))
  const handleDaysChange = event => setDays(parseInt(event.target.value))
  const handleDescription = event => setDescription(event.target.value)

  const duration = isDaily ? removeZeroTimeValues(`${hours}h ${minutes}m`) : `${days}d`
  const newStep = { duration: duration, description: description }
  console.log(newStep)

  const addTheStep = async () => {
    const dbStep = await persistStep(newStep, activityId)

    setPlans(prevPlans =>
      prevPlans.map(plan =>
        plan.id === planId
          ? {
              ...plan,
              activities: plan.activities.map(activity =>
                activity.id === activityId
                  ? {
                      ...activity,
                      steps: [...activity.steps, dbStep],
                    }
                  : activity
              ),
            }
          : plan
      )
    )
  }

  const updateTheStep = () => {
    setPlans(prevPlans =>
      prevPlans.map(plan =>
        plan.id === planId
          ? {
              ...plan,
              activities: plan.activities.map(activity =>
                activity.id === activityId
                  ? {
                      ...activity,
                      steps: activity.steps.map(step =>
                        step.id === theStep.id
                          ? { ...step, duration: duration, description: description }
                          : step
                      ),
                    }
                  : activity
              ),
            }
          : plan
      )
    )

    updateDbStep(newStep, theStep.id)
  }

  const formType = theStep ? "UPDATE" : "ADD"

  const handleAction = formType === "ADD" ? addTheStep : updateTheStep

  const timeAvailable = theStep
    ? addDurationStrings(stepsTimeLeft, theStep.duration)
    : stepsTimeLeft

  const {
    days: availableD,
    hours: availableH,
    minutes: availableM,
  } = extractDurationParts(timeAvailable)

  useClickOutside(stepFormRef, () => closeForm())

  return (
    <div ref={stepFormRef} className="text-black">
      {isDaily ? (
        <DailyDurationInput
          availableH={availableH}
          availableM={availableM}
          hours={hours}
          handleHoursChange={handleHoursChange}
          minutes={minutes}
          handleMinutesChange={handleMinutesChange}
        />
      ) : (
        <GoalDurationInput
          days={days}
          handleDaysChange={handleDaysChange}
          availableD={availableD}
        />
      )}

      <textarea value={description} onChange={handleDescription} rows="2" className="resize-none" />
      <button
        onClick={() => {
          handleAction()
          closeForm()
        }}
        className="test-container text-lightText"
      >
        {formType}
      </button>
    </div>
  )
}

const DailyDurationInput = ({
  hours,
  handleHoursChange,
  minutes,
  handleMinutesChange,
  availableH,
  availableM,
}) => {
  availableM = hours === availableH ? availableM : 59

  return (
    <>
      <select value={hours} onChange={handleHoursChange}>
        {Array.from({ length: availableH + 1 }, (_, i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <span className="text-lightText mr-5">h</span>

      <select value={minutes} onChange={handleMinutesChange}>
        {Array.from({ length: availableM + 1 }, (_, i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <span className="text-lightText mr-5">m</span>
    </>
  )
}

const GoalDurationInput = ({ days, handleDaysChange, availableD }) => (
  <>
    <select value={days} onChange={handleDaysChange}>
      {Array.from({ length: availableD }, (_, i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </select>
    <span className="text-lightText mr-5">days</span>
  </>
)

export default StepForm
