import { useState } from "react"
import ActionControls from "./ActionControls"
import StepForm from "./StepForm"
import deleteDbStep from "../utils/restApiRequests/deleteStep"

const Step = ({ step, isDaily, planId, activityId, setPlans }) => {
  const [editStepId, setEditStepId] = useState(0)

  const deleteStep = stepId => {
    setPlans(prevPlans =>
      prevPlans.map(plan =>
        plan.id === planId
          ? {
              ...plan,
              activities: plan.activities.map(activity =>
                activity.id === activityId
                  ? { ...activity, steps: activity.steps.filter(step => step.id !== stepId) }
                  : activity
              ),
            }
          : plan
      )
    )
    deleteDbStep(stepId)
  }

  return editStepId !== step.id ? (
    <li className="flex my-4">
      <div>{step.duration}</div>
      <div className="ml-2 grow">{step.description}</div>
      <ActionControls
        iconSizeInRem={1}
        openEditForm={() => setEditStepId(step.id)}
        deleteItem={() => deleteStep(step.id)}
      />
    </li>
  ) : (
    <StepForm
      theStep={step}
      closeForm={() => setEditStepId(0)}
      isDaily={isDaily}
      planId={planId}
      activityId={activityId}
      setPlans={setPlans}
    />
  )
}

export default Step
