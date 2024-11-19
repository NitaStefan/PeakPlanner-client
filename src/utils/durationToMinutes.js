const durationToMinutes = time => {
  let minutes = 0
  const regex = /(\d+)([dhm])/g
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

export default durationToMinutes
