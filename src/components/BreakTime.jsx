const BreakTime = ({ breakTime }) => {
  return breakTime !== "1m" && breakTime !== "1d" && breakTime !== "" ? (
    <div className="test-container border-tan">{breakTime}</div>
  ) : null
}

export default BreakTime
