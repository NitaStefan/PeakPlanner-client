import showTime from "./reformatDate"

const getIntervalErrorMsg = (minTime, maxTime, isDaily, theStartTime, theEndTime) => {
  const theType = isDaily ? "time " : "date "

  if (theEndTime < theStartTime) return "You cannot go backwards!"
  if (theEndTime === theStartTime) return `You cannot have the same ${theType}twice!`

  const theAfter = minTime !== null ? `after ${showTime(minTime)} ` : ""
  const theAnd = minTime !== null && maxTime !== null ? "and " : ""
  const theBefore = maxTime !== null ? `before ${showTime(maxTime)} ` : ""

  return `Choose a ${theType} ${theAfter} ${theAnd} ${theBefore}`
}

export default getIntervalErrorMsg
