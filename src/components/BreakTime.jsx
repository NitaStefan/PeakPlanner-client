const BreakTime = ({ breakTime }) => {
  return breakTime !== "1m" && breakTime !== "" ? (
    <div className="test-container border-tan">{breakTime}</div>
  ) : null
}

export default BreakTime
