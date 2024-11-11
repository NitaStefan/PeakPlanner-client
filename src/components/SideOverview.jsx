import { useState } from "react"
import PlanForm from "./PlanForm"
import Delete from "./icons/Delete"
import Edit from "./icons/Edit"
import deleteDbPlan from "../utils/restApiRequests/deletePlan"

const SideOverview = ({ dailyPlans, goalPlans, setGoalPlans, setShowDailyPlans }) => {
  const [isAddingPlan, setIsAddingPlan] = useState(false)
  const [editingPlanId, setEditingPlanId] = useState(0)

  const deletePlan = planId => {
    setGoalPlans(prevPlans => prevPlans.filter(plan => plan.id !== planId))
    deleteDbPlan(planId)
  }

  return (
    <aside className="fixed w-60 border-2 rounded-lg padding-content">
      <div className="text-lightText">
        <button onClick={() => setShowDailyPlans(true)}>Daily Routine</button>
      </div>
      <ul className="py-1">
        {dailyPlans &&
          dailyPlans.map(plan => (
            <li key={plan.id} className="pl-4 py-2">
              <a className="text-lightText" href="#">
                {plan.title}
              </a>
            </li>
          ))}
      </ul>
      <div className="text-lightText group">
        <button onClick={() => setShowDailyPlans(false)}>Goals</button>
        <button
          onClick={() => setIsAddingPlan(true)}
          className="float-right hidden group-hover:block"
        >
          +
        </button>
      </div>
      <ul className="py-1">
        {goalPlans &&
          goalPlans.map(plan =>
            editingPlanId !== plan.id ? (
              <li key={plan.id} className="pl-4 py-2 group">
                <a className="text-lightText" href="#">
                  {plan.title}
                </a>
                <div className="float-right hidden group-hover:block">
                  <button onClick={() => setEditingPlanId(plan.id)}>
                    <Edit />
                  </button>
                  <button onClick={() => deletePlan(plan.id)}>
                    <Delete />
                  </button>
                </div>
              </li>
            ) : (
              <PlanForm
                key={plan.id}
                thePlan={plan}
                setGoalPlans={setGoalPlans}
                closeForm={() => setEditingPlanId(0)}
              />
            )
          )}
      </ul>
      {isAddingPlan && (
        <PlanForm setGoalPlans={setGoalPlans} closeForm={() => setIsAddingPlan(false)} />
      )}
    </aside>
  )
}

export default SideOverview
