import { useRef, useState } from "react"
import DropDown from "./icons/DropDown"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

const SideOverview = ({ plans }) => {
  const goalPlans = plans.filter(plan => plan.type === "goal")
  const dropDownRef = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const [expanded, setExpanded] = useState(Array(goalPlans.length).fill(0))

  useGSAP(() => {
    const degrees = isOpen ? -180 : 0
    gsap.to(dropDownRef.current, { rotation: degrees, transformOrigin: "50% 70%", duration: 1 })
  }, [isOpen])

  return (
    <aside className="w-80 border-2 rounded-lg pl-4 py-2 pr-6">
      <div className="text-lightText">Daily Routine</div>
      <div className="text-lightText">Goals</div>
      <div className="">
        <ul className="py-1">
          {goalPlans.map((plan, index) => (
            <li key={plan.id}>
              <a className="pl-4 text-lightText" href="#">
                {plan.title}
              </a>
              <button className="w-6" onClick={() => setIsOpen(!isOpen)}>
                <DropDown ref={dropDownRef} />
              </button>
              {/* {expanded[index] && showTheActions} */}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default SideOverview
