import { useState } from "react"

const ActivityForm = ({ planId, setPlans }) => {
  // interval input
  const [theStartTime, setTheStartTime] = useState("09:10")
  const [theEndTime, setTheEndTime] = useState("11:45")
  const [isValidStartTime, setIsValidStartTime] = useState(true)
  const [isValidEndTime, setIsValidEndTime] = useState(true)
  const isCorrectInterval = isValidStartTime && isValidEndTime
  const minTime = "09:00"
  const maxTime = "17:00"

  // name input
  const [theName, setTheName] = useState("")

  // priority input
  const [thePriority, setThePriority] = useState("OPTIONAL")

  // POST req with the new activity, get it back with the updated id, update the plans

  console.log({
    id: null,
    startTime: theStartTime,
    theEndTime: theEndTime,
    name: theName,
    priority: thePriority,
  })

  return (
    <div className="test-container">
      <div className="inline-block">
        <IntervalInput
          theTime={theStartTime}
          setTheTime={setTheStartTime}
          minTime={minTime}
          maxTime={theEndTime}
          isValid={isValidStartTime}
          setIsValid={setIsValidStartTime}
        />
        <div>to</div>
        <IntervalInput
          theTime={theEndTime}
          setTheTime={setTheEndTime}
          minTime={theStartTime}
          maxTime={maxTime}
          isValid={isValidEndTime}
          setIsValid={setIsValidEndTime}
        />
      </div>
      <div className="inline-block ml-6">
        <NameInput theName={theName} setTheName={setTheName} />
      </div>
      <div className="inline-block ml-6">
        <PriorityInput thePriority={thePriority} setThePriority={setThePriority} />
      </div>
      <button
        className={`test-container ml-8 ${!isCorrectInterval && "bg-gray-600"}`}
        disabled={!isCorrectInterval}
      >
        ADD
      </button>
    </div>
  )
}

const IntervalInput = ({ theTime, setTheTime, isValid, setIsValid, minTime, maxTime }) => {
  const handleInput = e => {
    const value = e.target.value
    setTheTime(value)
    if (value < minTime || value > maxTime) setIsValid(false)
    else setIsValid(true)
  }

  return (
    <input
      className={`text-black rounded ${!isValid && "bg-red-400"}`}
      type="time"
      value={theTime}
      onChange={handleInput}
    />
  )
}

const NameInput = ({ theName, setTheName }) => {
  const handleName = e => {
    setTheName(e.target.value)
  }

  return (
    <>
      <label className="block w-fit" htmlFor="activityName">
        Name of the activity
      </label>
      <input
        className="text-black pl-2"
        type="text"
        value={theName}
        onChange={handleName}
        id="activityName"
      />
    </>
  )
}

const PriorityInput = ({ thePriority, setThePriority }) => {
  const handlePriority = e => {
    setThePriority(e.target.value)
  }

  return (
    <>
      <label className="block w-fit" htmlFor="thePriority">
        Choose priority
      </label>
      <select className="text-black" id="thePriority" value={thePriority} onChange={handlePriority}>
        <option value="HIGH">high</option>
        <option value="MEDIUM">medium</option>
        <option value="LIGHT">light</option>
        <option value="OPTIONAL">optional</option>
      </select>
    </>
  )
}

export default ActivityForm
