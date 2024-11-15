const extractDurationParts = timeString => {
  const regex = /(\d+)([dhm])/g
  const parts = { days: 0, hours: 0, minutes: 0 } // Default values
  let match

  while ((match = regex.exec(timeString)) !== null) {
    const value = parseInt(match[1], 10)
    const unit = match[2]
    if (unit === "d") parts.days = value
    else if (unit === "h") parts.hours = value
    else if (unit === "m") parts.minutes = value
  }

  return parts
}

export default extractDurationParts
