import Priority from "../icons/Priority"
import DropDown from "../icons/DropDown"
import CurvedArrow from "../icons/CurvedArrow"
import deleteDbActivity from "../../utils/restApiRequests/deleteActivity"
import ActivityForm from "./ActivityForm"
import { useState } from "react"
import reformatDate from "../../utils/reformatDate"
import inTitleCase from "../../utils/inTitleCase"
import Step from "../Step"
import ActionControls from "../ActionControls"
import StepForm from "../StepForm"
import calculateTimeInterval from "../../utils/calculateTimeInterval"
import calculateDateInterval from "../../utils/calculateDateInterval"
import addDurationStrings from "../../utils/addDurationStrings"
import subtractDurationStrings from "../../utils/subtractDurationStrings"

const Activity = ({
  activity,
  planId,
  setPlans,
  minTime,
  maxTime,
  isDaily,
  showStepsForActId,
  toggleShowSteps,
}) => {
  const [editActivityId, setEditActivityId] = useState(0)

  return (
    <div className="mt-8">
      {editActivityId !== activity.id ? (
        <ActivityInformation
          isDaily={isDaily}
          activity={activity}
          planId={planId}
          setPlans={setPlans}
          openEditForm={() => setEditActivityId(activity.id)}
          showStepsForActId={showStepsForActId}
          toggleShowSteps={toggleShowSteps}
        />
      ) : (
        <ActivityForm
          isDaily={isDaily}
          planId={planId}
          theActivity={activity}
          setPlans={setPlans}
          closeForm={() => setEditActivityId(0)}
          minTime={minTime}
          maxTime={maxTime}
        />
      )}
    </div>
  )
}

const ActivityInformation = ({
  activity,
  planId,
  setPlans,
  openEditForm,
  isDaily,
  showStepsForActId,
  toggleShowSteps,
}) => {
  const [addStepToActId, setAddStepToActId] = useState(0)

  const deleteActivity = activityId => {
    setPlans(prevPlans =>
      prevPlans.map(plan =>
        plan.id === planId
          ? { ...plan, activities: plan.activities.filter(activity => activity.id !== activityId) }
          : plan
      )
    )
    deleteDbActivity(activityId)
  }

  const intervalTime = isDaily
    ? calculateTimeInterval(activity.startTime, activity.endTime)
    : calculateDateInterval(activity.startTime, activity.endTime)

  const totalStepsTime = activity.steps.reduce(
    (total, currStep) => addDurationStrings(total, currStep.duration),
    ""
  )
  const stepsTimeLeft = subtractDurationStrings(intervalTime, totalStepsTime)

  return (
    <div key={activity.id} className="flex pl-4 group">
      <Interval startTime={activity.startTime} endTime={activity.endTime} />
      <div className="inline-block grow mt-4 ml-4">
        <p className="text-tan text-xl mb-4">
          {inTitleCase(activity.name)} <Priority priority={activity.priority} />
        </p>
        {showStepsForActId === activity.id ? (
          <>
            <ul>
              {activity.steps.map(step => (
                <Step
                  stepsTimeLeft={stepsTimeLeft}
                  setPlans={setPlans}
                  key={step.id}
                  step={step}
                  isDaily={isDaily}
                  planId={planId}
                  activityId={activity.id}
                />
              ))}
            </ul>
            {stepsTimeLeft !== "" && (
              <>
                <div>Interval time left: {stepsTimeLeft}</div>
                {addStepToActId !== activity.id ? (
                  <button onClick={() => setAddStepToActId(activity.id)} className="border-2 px-1">
                    +
                  </button>
                ) : (
                  <StepForm
                    stepsTimeLeft={stepsTimeLeft}
                    closeForm={() => setAddStepToActId(0)}
                    isDaily={isDaily}
                    planId={planId}
                    activityId={activity.id}
                    setPlans={setPlans}
                  />
                )}
              </>
            )}
          </>
        ) : (
          <div>
            Steps: {activity.steps.length}
            {", "}Interval Time: {intervalTime}
            {activity.steps.length === 0 && (
              <button
                onClick={() => {
                  setAddStepToActId(activity.id)
                  toggleShowSteps(activity.id)
                }}
                className="border-2 px-1"
              >
                +
              </button>
            )}
          </div>
        )}
      </div>
      <div>
        <ActionControls
          openEditForm={openEditForm}
          deleteItem={() => deleteActivity(activity.id)}
          iconSizeInRem={1.4}
        />
        <button
          className="border-2 rounded-md float-right ml-2 mr-8"
          onClick={() => toggleShowSteps(activity.id)}
        >
          <DropDown />
        </button>
      </div>
    </div>
  )
}

const Interval = ({ startTime, endTime }) => {
  return (
    <div className="inline-flex items-center flex-col mt-4">
      <p>{reformatDate(startTime)}</p>
      <CurvedArrow />
      <p>{reformatDate(endTime)}</p>
    </div>
  )
}

export default Activity
