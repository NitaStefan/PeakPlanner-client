import { useEffect, useRef, useState } from "react"
import persistPlan from "../utils/restApiRequests/persistPlan"
import useClickOutside from "./hooks/useClickOutside"
import updateDbPlan from "../utils/restApiRequests/updatePlan"
import languagePlan from "../utils/constants/createLanguagePlan"

const PlanForm = ({ setGoalPlans, closeForm, thePlan }) => {
  const [theTitle, setTheTitle] = useState(thePlan?.title || "")
  const titleRef = useRef(null)

  let newPlan = { title: theTitle, type: "GOAL" }

  const handleAddPlan = async () => {
    if (newPlan.title === "_foreign_language_") newPlan = languagePlan

    const dbPlan = await persistPlan(newPlan)

    setGoalPlans(prevPlans => [...prevPlans, dbPlan])
  }

  const handleUpdatePlan = () => {
    setGoalPlans(prevPlans =>
      prevPlans.map(plan => (plan.id === thePlan.id ? { ...plan, title: theTitle } : plan))
    )
    updateDbPlan(newPlan, thePlan.id)
  }

  const formMode = thePlan ? "UPDATE" : "ADD"

  const handleAction = formMode === "ADD" ? handleAddPlan : handleUpdatePlan

  useClickOutside(titleRef, closeForm)

  return (
    <div ref={titleRef}>
      <input
        className="pl-3 w-full"
        type="text"
        onChange={e => setTheTitle(e.target.value)}
        value={theTitle}
        autoFocus
        onKeyDown={e => {
          if (e.key === "Enter")
            if (theTitle !== "") {
              handleAction()
              closeForm()
            } else closeForm()
        }}
      />
      <button
        disabled={theTitle === ""}
        onClick={() => {
          handleAction()
          closeForm()
        }}
        className={`text-lightText px-2 ${theTitle.trim() === "" && "bg-gray-600"}`}
      >
        {formMode}
      </button>
    </div>
  )
}

export default PlanForm
