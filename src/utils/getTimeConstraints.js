const getTimeConstraints = (activities, index) => {
  const prevActivity = index > 0 ? activities[index - 1] : null
  const nextActivity = index < activities.length - 1 ? activities[index + 1] : null

  return [prevActivity ? prevActivity.endTime : null, nextActivity ? nextActivity.startTime : null]
}

export default getTimeConstraints
