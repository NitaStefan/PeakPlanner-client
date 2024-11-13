import Priority from "../icons/Priority"
import DropDown from "../icons/DropDown"
import CurvedArrow from "../icons/CurvedArrow"
import deleteDbActivity from "../../utils/restApiRequests/deleteActivity"
import ActivityForm from "./ActivityForm"
import { useState } from "react"
import showTime from "../../utils/showTime"
import inTitleCase from "../../utils/inTitleCase"
import Step from "../Step"
import ActionControls from "../ActionControls"

const Activity = ({ activity, planId, setPlans, minTime, maxTime, isDaily }) => {
  const [editActivityId, setEditActivityId] = useState(0)
  const [addStepToActId, setAddStepToActId] = useState(0)

  return (
    <div className="mt-8">
      {editActivityId !== activity.id ? (
        <ActivityInformation
          activity={activity}
          planId={planId}
          setPlans={setPlans}
          openEditForm={() => setEditActivityId(activity.id)}
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

const ActivityInformation = ({ activity, planId, setPlans, openEditForm }) => {
  const [showSteps, setShowSteps] = useState(false)

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

  return (
    <div key={activity.id} className="flex pl-4 group">
      <Interval startTime={activity.startTime} endTime={activity.endTime} />
      <div className="inline-block grow mt-4 ml-4">
        <p className="text-tan text-xl mb-4">
          {inTitleCase(activity.name)} <Priority priority={activity.priority} />
        </p>
        {showSteps ? (
          <>
            <ul>
              {activity.steps.map(step => (
                <Step key={step.id} step={step} />
              ))}
            </ul>
            <button className="test-container">+</button>
          </>
        ) : (
          <div>Steps to follow: {activity.steps.length} </div>
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
          onClick={() => setShowSteps(!showSteps)}
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
      <p>{showTime(startTime)}</p>
      <CurvedArrow />
      <p>{showTime(endTime)}</p>
    </div>
  )
}

// const updateStepCompletionInPlan = (planId, activityId, stepId, completed) => {
//   setPlans(prevPlans =>
//     prevPlans.map(plan =>
//       plan.id === planId
//         ? {
//             ...plan,
//             activities: plan.activities.map(activity =>
//               activity.id === activityId
//                 ? {
//                     ...activity,
//                     steps: activity.steps.map(step =>
//                       step.id === stepId
//                         ? { ...step, completed } // Update the specific step's completed value
//                         : step // Return the unmodified step
//                     )
//                   }
//                 : activity // Return the unmodified activity
//             )
//           }
//         : plan // Return the unmodified plan
//     )
//   );
// };

export default Activity
