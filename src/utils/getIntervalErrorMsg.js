import showTime from "./reformatDate"

const getIntervalErrorMsg = (minTime, maxTime, isDaily, theStartTime, theEndTime) => {
  const theType = isDaily ? "time " : "date "

  if (theEndTime < theStartTime) return "You cannot go backwards!"
  if (theEndTime === theStartTime) return `You cannot have the same ${theType}twice!`

  if (minTime === null && isDaily) minTime = "00:00"
  if (maxTime === null && isDaily) maxTime = "23:59"

  const theAfter = isDaily || minTime !== null ? `after ${showTime(minTime)} ` : ""
  const theAnd = isDaily || (minTime !== null && maxTime !== null) ? "and " : ""
  const theBefore = isDaily || maxTime !== null ? `before ${showTime(maxTime)} ` : ""

  return `Choose a ${theType} ${theAfter} ${theAnd} ${theBefore}`
}

export default getIntervalErrorMsg
