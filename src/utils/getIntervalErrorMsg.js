import showTime from "./showTime"

const getIntervalErrorMsg = (minTime, maxTime, isDaily, theStartTime, theEndTime) => {
  if (theEndTime < theStartTime) return "You cannot go backwards!"

  if (minTime === null && isDaily) minTime = "00:00"
  if (maxTime === null && isDaily) maxTime = "23:59"

  const theType = isDaily ? "time " : "date "
  const theBefore = isDaily || minTime !== null ? `after ${showTime(minTime)} ` : ""
  const theAnd = isDaily || (minTime !== null && maxTime !== null) ? "and " : ""
  const theAfter = isDaily || maxTime !== null ? `before ${showTime(maxTime)} ` : ""

  return `Choose a ${theType} ${theBefore} ${theAnd} ${theAfter}`
}

export default getIntervalErrorMsg
