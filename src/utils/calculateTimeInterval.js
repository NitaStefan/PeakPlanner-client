function calculateTimeInterval(startTime, endTime) {
  // Split the times into hours and minutes
  const [startHours, startMinutes] = startTime.split(":").map(Number)
  const [endHours, endMinutes] = endTime.split(":").map(Number)

  // Convert both times to minutes from 00:00
  const startTotalMinutes = startHours * 60 + startMinutes
  const endTotalMinutes = endHours * 60 + endMinutes

  // Calculate the difference in minutes
  const diffMinutes = endTotalMinutes - startTotalMinutes

  // Convert the difference back into hours and minutes
  const hours = Math.floor(diffMinutes / 60)
  const minutes = diffMinutes % 60

  // Dynamically construct the result string
  const parts = []
  if (hours > 0) parts.push(`${hours}h`)
  if (minutes > 0) parts.push(`${minutes}m`)

  // Return the formatted result
  return parts.join(" ")
}

export default calculateTimeInterval
