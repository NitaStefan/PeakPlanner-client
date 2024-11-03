import { useState } from "react"
import Priority from "../icons/Priority"
import DropDown from "../icons/DropDown"

const Steps = ({ isOpen, steps, toggle }) => {
  return isOpen ? (
    <ul className="relative border-2 rounded bg-medium pl-4">
      {steps.map(step => (
        <li key={step.id} className="my-4">
          <p>{step.description}</p>
          <p>{step.duration}</p>
        </li>
      ))}
      <button className="absolute top-1 right-1 rotate-180 border-2 rounded-md" onClick={() => toggle(!isOpen)}>
        <DropDown />
      </button>
    </ul>
  ) : (
    <div>
      Steps to follow: {steps.length}{" "}
      <button className="border-2 rounded-md" onClick={() => toggle(!isOpen)}>
        <DropDown />
      </button>
    </div>
  )
}

const Description = ({ name, priority, steps }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="inline-block grow mt-4 ml-4">
      <p className="text-tan text-xl mb-4">
        {name} <Priority priority={priority} />
      </p>
      <Steps isOpen={isOpen} toggle={setIsOpen} steps={steps} />
    </div>
  )
}

export default Description
