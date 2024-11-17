const BreakTime = ({ breakTime }) => {
  return breakTime !== "1m" && breakTime !== "1d" && breakTime !== "" ? (
    <div className="test-container bg-tan">{breakTime}</div>
  ) : null
}

export default BreakTime
