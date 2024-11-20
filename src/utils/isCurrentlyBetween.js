function isCurrentlyBetween(time1, time2) {
  const currentDate = new Date()

  // Helper function to parse "yyyy-mm-dd" or "hh:mm"
  function parseInput(time) {
    if (!time) return null // Allow null values
    if (time.includes("-")) {
      // "yyyy-mm-dd" format
      return new Date(time)
    } else if (time.includes(":")) {
      // "hh:mm" format
      const [hours, minutes] = time.split(":").map(Number)
      const parsedDate = new Date(currentDate)
      parsedDate.setHours(hours, minutes, 0, 0) // Set current day's hours and minutes
      return parsedDate
    } else {
      throw new Error("Invalid time format. Use 'yyyy-mm-dd' or 'hh:mm'.")
    }
  }

  const parsedTime1 = parseInput(time1)
  const parsedTime2 = parseInput(time2)

  // Handle cases where one or both inputs are null
  if (!parsedTime1 && !parsedTime2) {
    throw new Error("At least one of time1 or time2 must be provided.")
  }
  if (!parsedTime1) {
    return currentDate <= parsedTime2 // Only check the upper bound
  }
  if (!parsedTime2) {
    return currentDate >= parsedTime1 // Only check the lower bound
  }

  // Normal range or crossing midnight
  if (parsedTime1 <= parsedTime2) {
    // Normal range
    return currentDate >= parsedTime1 && currentDate <= parsedTime2
  } else {
    // Handles crossing midnight (e.g., "23:00" to "02:00")
    return currentDate >= parsedTime1 || currentDate <= parsedTime2
  }
}

export default isCurrentlyBetween
