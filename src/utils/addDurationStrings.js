function addDurationStrings(time1, time2) {
  // Helper function to convert time strings to minutes
  function timeToMinutes(time) {
    let minutes = 0
    const regex = /(\d+)([dhm])/g // Include 'd' in the regex
    let match
    while ((match = regex.exec(time)) !== null) {
      const value = parseInt(match[1], 10)
      const unit = match[2]
      if (unit === "d") {
        minutes += value * 24 * 60 // Convert days to minutes
      } else if (unit === "h") {
        minutes += value * 60 // Convert hours to minutes
      } else if (unit === "m") {
        minutes += value // Add minutes directly
      }
    }
    return minutes
  }

  // Helper function to format minutes back to time string
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
  const totalMinutes = timeToMinutes(time1) + timeToMinutes(time2)
  return minutesToTime(totalMinutes)
}

export default addDurationStrings
