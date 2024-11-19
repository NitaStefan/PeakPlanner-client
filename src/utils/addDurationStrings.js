import durationToMinutes from "./durationToMinutes"

function addDurationStrings(time1, time2) {
  // Helper function to format minutes to duration string
  function minutesToTime(minutes) {
    const days = Math.floor(minutes / (24 * 60))
    const remainingMinutesAfterDays = minutes % (24 * 60)
    const hours = Math.floor(remainingMinutesAfterDays / 60)
    const remainingMinutes = remainingMinutesAfterDays % 60

    return `${days > 0 ? days + "d " : ""}${hours > 0 ? hours + "h " : ""}${
      remainingMinutes > 0 ? remainingMinutes + "m" : ""
    }`.trim()
  }

  // Convert both times to minutes, add them, and format back
  const totalMinutes = durationToMinutes(time1) + durationToMinutes(time2)
  return minutesToTime(totalMinutes)
}

export default addDurationStrings
