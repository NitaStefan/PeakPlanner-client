import removeZeroTimeValues from "../utils/removeZeroTimeValues"

const BreakTime = ({ breakTime }) => {
  const subtractOneDay = timeString => {
    if (timeString === null) return null
    const dayMatch = timeString.match(/^(\d+)d$/)
    if (dayMatch) {
      const days = parseInt(dayMatch[1], 10)
      return `${days - 1}d`
    }
    return timeString
  }

  breakTime = subtractOneDay(breakTime)

  return breakTime !== null && breakTime !== "0h 1m" && breakTime !== "0d" && breakTime !== "" ? (
    <div className="test-container bg-tan">{removeZeroTimeValues(breakTime)}</div>
  ) : null
}

export default BreakTime
