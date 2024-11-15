import removeZeroTimeValues from "../utils/removeZeroTimeValues"

const BreakTime = ({ breakTime }) => {
  return breakTime !== null && breakTime !== "0h 1m" ? (
    <div className="test-container bg-tan">{removeZeroTimeValues(breakTime)}</div>
  ) : null
}

export default BreakTime
