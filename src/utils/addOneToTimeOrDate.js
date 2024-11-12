const addOneToTimeOrDate = input => {
  if (input === null) return null

  // Check if input is in 'hh:mm' format
  if (/^\d{2}:\d{2}$/.test(input)) {
    let [hours, minutes] = input.split(":").map(Number)
    hours = (hours + 1) % 24 // Add one hour and wrap around after 23
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`
  }

  // Check if input is in 'yyyy-mm-dd' format
  if (/^\d{4}-\d{2}-\d{2}$/.test(input)) {
    const date = new Date(input)
    date.setDate(date.getDate() + 1) // Add one day
    return date.toISOString().split("T")[0] // Return in yyyy-mm-dd format
  }

  // If format is invalid
  throw new Error("Invalid format. Expected 'hh:mm' or 'yyyy-mm-dd'.")
}

export default addOneToTimeOrDate
