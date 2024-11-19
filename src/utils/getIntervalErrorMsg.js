import showTime from "./reformatDate"
import addDurationStrings from "./addDurationStrings"
import calculateDateInterval from "./calculateDateInterval"
import calculateTimeInterval from "./calculateTimeInterval"
import durationToMinutes from "./durationToMinutes"

const getIntervalErrorMsg = (minTime, maxTime, isDaily, theStartTime, theEndTime, theSteps) => {
  const totalStepsTime = theSteps
    ? theSteps.reduce((total, currStep) => addDurationStrings(total, currStep.duration), "")
    : ""

  const intervalTime = isDaily
    ? calculateTimeInterval(theStartTime, theEndTime)
    : calculateDateInterval(theStartTime, theEndTime)

  const isRespectingBounds =
    (minTime === null || (isDaily ? theStartTime >= minTime : theStartTime > minTime)) &&
    (maxTime === null || (isDaily ? theEndTime <= maxTime : theEndTime < maxTime))

  const theType = isDaily ? "time" : "date"

  if (theEndTime < theStartTime) return "You cannot go backwards!"
  if (theEndTime === theStartTime) return `You cannot have the same ${theType} twice!`
  if (durationToMinutes(intervalTime) < durationToMinutes(totalStepsTime))
    return `Interval duration (${intervalTime}) is too small for the steps duration (${totalStepsTime})`

  if (!isRespectingBounds) {
    const theAfter = minTime !== null ? `after ${showTime(minTime)} ` : ""
    const theAnd = minTime !== null && maxTime !== null ? "and " : ""
    const theBefore = maxTime !== null ? `before ${showTime(maxTime)} ` : ""

    return `Choose a ${theType} ${theAfter} ${theAnd} ${theBefore}`
  }
  return null
}

export default getIntervalErrorMsg
