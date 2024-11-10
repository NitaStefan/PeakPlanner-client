import { useState } from "react"
import persistPlan from "../utils/persistPlan"

const SideOverview = ({ dailyPlans, goalPlans, setGoalPlans }) => {
  const [isAddingPlan, setIsAddingPlan] = useState(false)
  const [theTitle, setTheTitle] = useState("")

  const handleAddPlan = async () => {
    const thePlan = { title: theTitle, type: "GOAL" }
    const dbPlan = await persistPlan(thePlan)
    setGoalPlans(prevPlans => [...prevPlans, dbPlan])
    setIsAddingPlan(false)
  }

  //TODO : add click outside event for the title input

  return (
    <aside className="fixed w-80 border-2 rounded-lg padding-content">
      <div className="text-lightText">Daily Routine</div>
      <ul className="py-1">
        {dailyPlans &&
          dailyPlans.map(plan => (
            <li key={plan.id}>
              <a className="pl-4 text-lightText" href="#">
                {plan.title}
              </a>
            </li>
          ))}
      </ul>
      <div className="text-lightText group">
        Goals{" "}
        <button
          onClick={() => setIsAddingPlan(true)}
          className="float-right hidden group-hover:block"
        >
          +
        </button>
      </div>
      <ul className="py-1">
        {goalPlans &&
          goalPlans.map(plan => (
            <li key={plan.id}>
              <a className="pl-4 text-lightText" href="#">
                {plan.title}
              </a>
            </li>
          ))}
      </ul>
      {isAddingPlan && (
        <>
          <input
            className="pl-3"
            type="text"
            onChange={e => setTheTitle(e.target.value)}
            value={theTitle}
          />
          <button
            disabled={theTitle === ""}
            onClick={() => handleAddPlan()}
            className={`text-lightText px-2 ${theTitle === "" && "bg-gray-600"}`}
          >
            Add
          </button>
        </>
      )}
    </aside>
  )
}

export default SideOverview
