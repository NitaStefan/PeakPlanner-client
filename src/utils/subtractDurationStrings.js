import durationToMinutes from "./durationToMinutes"

const subtractDurationStrings = (time1, time2) => {
  // Helper function to convert minutes back to a time string
  function minutesToTime(minutes) {
    const days = Math.floor(minutes / (24 * 60))
    const remainingMinutesAfterDays = minutes % (24 * 60)
    const hours = Math.floor(remainingMinutesAfterDays / 60)
    const remainingMinutes = remainingMinutesAfterDays % 60

    const parts = []
    if (days > 0) parts.push(`${days}d`)
    if (hours > 0) parts.push(`${hours}h`)
    if (remainingMinutes > 0) parts.push(`${remainingMinutes}m`)
    return parts.join(" ")
  }

  // Convert both times to minutes
  const minutes1 = durationToMinutes(time1)
  const minutes2 = durationToMinutes(time2)

  // Subtract minutes2 from minutes1
  const totalMinutes = minutes1 - minutes2

  // Convert back to time string
  return minutesToTime(totalMinutes)
}

export default subtractDurationStrings
