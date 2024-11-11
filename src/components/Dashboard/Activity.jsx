import Priority from "../icons/Priority"
import DropDown from "../icons/DropDown"
import CurvedArrow from "../icons/CurvedArrow"
import Edit from "../icons/Edit"
import Delete from "../icons/Delete"
import deleteDbActivity from "../../utils/restApiRequests/deleteActivity"
import ActivityForm from "./ActivityForm"
import { useState } from "react"
import showTime from "../../utils/showTime"
import inTitleCase from "../../utils/inTitleCase"

const Activity = ({ activity, planId, setPlans }) => {
  const [editActivityActId, setEditActivityActId] = useState(0)

  return editActivityActId !== activity.id ? (
    <ActivityInformation
      activity={activity}
      planId={planId}
      setPlans={setPlans}
      openEditForm={() => setEditActivityActId(activity.id)}
    />
  ) : (
    <ActivityForm
      planId={planId}
      theActivity={activity}
      setPlans={setPlans}
      closeForm={() => setEditActivityActId(0)}
    />
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
        <button
          className="border-2 rounded-md float-right mr-10"
          onClick={() => setShowSteps(!showSteps)}
        >
          <DropDown />
        </button>
        {showSteps ? (
          <ul>
            {activity.steps.map(step => (
              <Step key={step.id} step={step} />
            ))}
          </ul>
        ) : (
          <div>Steps to follow: {activity.steps.length} </div>
        )}
      </div>
      <ActionControls openEditForm={openEditForm} deleteItem={() => deleteActivity(activity.id)} />
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

const Step = ({ step }) => (
  <li className="my-4">
    <p>{step.description}</p>
    <p>{step.duration}</p>
  </li>
)

const ActionControls = ({ openEditForm, deleteItem }) => {
  return (
    <div className="w-12">
      <div className="hidden group-hover:block pl-2">
        <button className="mt-2 block" onClick={deleteItem}>
          <Delete />
        </button>
        <button className="mt-2 block" onClick={openEditForm}>
          <Edit />
        </button>
      </div>
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
