const getInitialStepValues = (theStep, isDaily) => {
  if (isDaily) {
    if (theStep) {
      const hoursMatch = theStep.duration.match(/(\d+)h/)
      const minutesMatch = theStep.duration.match(/(\d+)m/)

      const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0
      const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0

      return [hours, minutes, null, theStep.description]
    }
    return [1, 0, null, ""]
  }
  if (theStep) {
    const daysMatch = theStep.duration.match(/(\d+)d/)

    const days = parseInt(daysMatch[1], 10)

    return [null, null, days, theStep.description]
  }
  return [null, null, 1, ""]
}

export default getInitialStepValues
