const reformatDate = input => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/

  if (dateRegex.test(input)) {
    const [year, month, day] = input.split("-")

    // Convert month number to month name
    const date = new Date(year, month - 1, day)
    const options = { day: "numeric", month: "short", year: "numeric" }

    return date.toLocaleDateString("en-GB", options)
  } else return input
}

export default reformatDate
