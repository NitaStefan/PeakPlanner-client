import CurvedArrow from "../icons/CurvedArrow"

const Interval = ({ startTime, endTime }) => {
  return (
    <div className="inline-flex items-center flex-col mt-4">
      <p>{startTime}</p>
      <CurvedArrow />
      <p>{endTime}</p>
    </div>
  )
}

export default Interval
