const addOneMinute = timeStr => {
  // Split the input time string into hours and minutes
  let [hours, minutes] = timeStr.split(":").map(Number)

  // Add one minute
  minutes += 1

  // Check if minutes overflow
  if (minutes === 60) {
    minutes = 0
    hours += 1
  }

  // Check if hours overflow
  if (hours === 24) {
    hours = 0
  }

  // Pad with zero if needed
  const hoursStr = hours.toString().padStart(2, "0")
  const minutesStr = minutes.toString().padStart(2, "0")

  // Return the new time in HH:MM format
  return `${hoursStr}:${minutesStr}`
}

export default addOneMinute
