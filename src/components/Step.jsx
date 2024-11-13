import { useState } from "react"
import ActionControls from "./ActionControls"
import StepForm from "./StepForm"

const Step = ({ step, isDaily, planId, activityId, setPlans }) => {
  const [editStepId, setEditStepId] = useState(0)

  return editStepId !== step.id ? (
    <li className="flex my-4">
      <div>{step.duration}</div>
      <div className="ml-2 grow">{step.description}</div>
      <ActionControls iconSizeInRem={1} openEditForm={() => setEditStepId(step.id)} />
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
