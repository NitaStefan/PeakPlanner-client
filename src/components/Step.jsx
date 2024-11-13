import { useState } from "react"
import ActionControls from "./ActionControls"
import StepForm from "./StepForm"

const Step = ({ step }) => {
  const [editStepId, setEditStepId] = useState(0)

  return editStepId !== step.id ? (
    <li className="flex my-4">
      <div>{step.duration}</div>
      <div className="ml-2 grow">{step.description}</div>
      <ActionControls iconSizeInRem={1} openEditForm={() => setEditStepId(step.id)} />
    </li>
  ) : (
    <StepForm closeForm={() => setEditStepId(0)} />
  )
}

export default Step
