const addDaysToDate = (dateStr, days) => {
  // Parse the input date string to a Date object
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format. Use 'yyyy-mm-dd'.")
  }

  // Ensure the second argument is a valid number
  if (typeof days !== "number") {
    throw new Error("The 'days' parameter must be a number.")
  }

  // Add the days to the date
  date.setDate(date.getDate() + days)

  // Convert the updated date back to "yyyy-mm-dd" format
  const updatedDateStr = date.toISOString().split("T")[0]
  return updatedDateStr
}

export default addDaysToDate
