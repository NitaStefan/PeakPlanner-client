const Step = ({ step }) => {
  return (
    <li className="my-4">
      <p>{step.description}</p>
      <p>{step.duration}</p>
    </li>
  )
}

export default Step
