const getHoursMinutesString = (hours, minutes) => {
  const theHours = hours === 0 ? "" : `${hours}h`
  const theMinutes = minutes === 0 ? "" : `${minutes}m`

  return theHours + (theHours !== "" && theMinutes !== "" ? " " : "") + theMinutes
}

export default getHoursMinutesString
