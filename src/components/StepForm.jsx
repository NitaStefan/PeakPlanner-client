import { useRef, useState } from "react"
import useClickOutside from "./hooks/useClickOutside"

const StepForm = ({ closeForm, theStep, isDaily, planId, activityId, setPlans }) => {
  const initialDescription = "nothing"

  const stepFormRef = useRef(null)

  const [hours, setHours] = useState(1)
  const [minutes, setMinutes] = useState(35)
  const [days, setDays] = useState(1)
  const [description, setDescription] = useState(initialDescription)

  const handleHoursChange = event => setHours(parseInt(event.target.value))
  const handleMinutesChange = event => setMinutes(parseInt(event.target.value))
  const handleDaysChange = event => setDays(parseInt(event.target.value))
  const handleDescription = event => setDescription(event.target.value)

  const duration = isDaily ? `${hours}h ${minutes}m` : `${days} days`
  const newStep = { duration: duration, description: description }

  const addTheStep = () => {}

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
    // TODO: Also update the step from the db
  }

  const formType = theStep ? "UPDATE" : "ADD"

  const handleAction = formType === "ADD" ? addTheStep : updateTheStep

  useClickOutside(stepFormRef, () => closeForm())

  return (
    <div ref={stepFormRef} className="text-black">
      {isDaily ? (
        <DailyDurationInput
          hours={hours}
          handleHoursChange={handleHoursChange}
          minutes={minutes}
          handleMinutesChange={handleMinutesChange}
        />
      ) : (
        <GoalDurationInput days={days} handleDaysChange={handleDaysChange} />
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

const DailyDurationInput = ({ hours, handleHoursChange, minutes, handleMinutesChange }) => (
  <>
    <select value={hours} onChange={handleHoursChange}>
      {Array.from({ length: 24 }, (_, i) => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </select>
    <span className="text-lightText mr-5">h</span>

    <select value={minutes} onChange={handleMinutesChange}>
      {Array.from({ length: 60 }, (_, i) => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </select>
    <span className="text-lightText mr-5">m</span>
  </>
)

const GoalDurationInput = ({ days, handleDaysChange }) => (
  <>
    <select value={days} onChange={handleDaysChange}>
      {Array.from({ length: 10 }, (_, i) => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </select>
    <span className="text-lightText mr-5">days</span>
  </>
)

export default StepForm
