function calculateDateInterval(startDate, endDate) {
  // Parse the dates and create Date objects
  const start = new Date(startDate)
  const end = new Date(endDate)

  // Calculate the difference in milliseconds and add one day
  const diffMilliseconds = end - start + 1000 * 60 * 60 * 24

  // Convert milliseconds to days
  const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24))

  // Return the result as a string only if there are days
  return diffDays > 0 ? `${diffDays}d` : ""
}

export default calculateDateInterval
