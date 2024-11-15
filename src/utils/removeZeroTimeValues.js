const removeZeroTimeValues = timeString =>
  timeString
    .split(" ")
    .filter(part => !part.startsWith("0"))
    .join(" ")

export default removeZeroTimeValues
