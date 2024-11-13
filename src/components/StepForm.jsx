import { useRef, useState } from "react"
import useClickOutside from "./hooks/useClickOutside"

const StepForm = ({ closeForm, theStep }) => {
  // TODO: add a different select for when working with days
  const initialDescription = "nothing"

  const stepFormRef = useRef(null)

  const [hours, setHours] = useState(1)
  const [minutes, setMinutes] = useState(35)
  const [description, setDescription] = useState(initialDescription)

  const duration = `${hours}h ${minutes}m`

  const handleHoursChange = event => setHours(parseInt(event.target.value))
  const handleMinutesChange = event => setMinutes(parseInt(event.target.value))
  const handleDescription = event => setDescription(event.target.value)

  useClickOutside(stepFormRef, () => closeForm())

  return (
    <div ref={stepFormRef} className="text-black">
      <select value={hours} onChange={handleHoursChange}>
        {Array.from({ length: 24 }, (_, i) => (
          <option key={i} value={i}>
            {i}h
          </option>
        ))}
      </select>

      <select value={minutes} onChange={handleMinutesChange}>
        {Array.from({ length: 60 }, (_, i) => (
          <option key={i} value={i}>
            {i}m
          </option>
        ))}
      </select>

      <input type="text" value={description} onChange={handleDescription} />
    </div>
  )
}

export default StepForm
