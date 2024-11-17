import getCurrentDate from "./getCurrentDate"
import addOneToTimeOrDate from "./addOneToTimeOrDate"
import addOneMinute from "./addOneMinute"

const getProperInitialTimes = (theActivity, isDaily, minTime) => {
  const basedOnMinTime =
    isDaily && minTime && minTime >= "23:00" ? addOneMinute(minTime) : addOneToTimeOrDate(minTime) // one hour or one day

  const initialStartTime =
    theActivity?.startTime || basedOnMinTime || (isDaily ? "08:00" : getCurrentDate())
  const initialEndTime =
    theActivity?.endTime ||
    (isDaily && initialStartTime >= "22:59" ? "23:59" : addOneToTimeOrDate(initialStartTime))

  return [initialStartTime, initialEndTime]
}

export default getProperInitialTimes
