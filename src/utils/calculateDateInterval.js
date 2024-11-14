function calculateDateInterval(startDate, endDate) {
  // Parse the dates and create Date objects
  const start = new Date(startDate)
  const end = new Date(endDate)

  // Calculate the difference in milliseconds
  const diffMilliseconds = end - start

  // Convert milliseconds to days
  const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24))

  // Return the result as a string
  return `${diffDays}d`
}

export default calculateDateInterval
