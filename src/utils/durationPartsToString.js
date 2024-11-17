const durationPartsToString = duration => {
  const { days = 0, hours = 0, minutes = 0 } = duration

  const parts = []
  if (days > 0) parts.push(`${days}d`)
  if (hours > 0) parts.push(`${hours}h`)
  if (minutes > 0) parts.push(`${minutes}m`)

  return parts.join(" ")
}

export default durationPartsToString
