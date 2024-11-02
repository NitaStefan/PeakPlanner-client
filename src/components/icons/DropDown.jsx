import { forwardRef } from "react"

const DropDown = forwardRef((props, ref) => {
  return (
    <svg
      ref={ref}
      className="my-0 mx-auto"
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 -1160 960 960"
      width="1em"
      fill="#F5F5F5"
    >
      <path d="M480-360 280-560h400L480-360Z" />
    </svg>
  )
})

export default DropDown
