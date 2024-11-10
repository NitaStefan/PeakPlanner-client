import InitializeDailyPlans from "./InitializeDailyPlans"
import ActivityForm from "./ActivityForm"
import { useState } from "react"
import Activity from "./Activity"

const Dashboard = ({ displayedPlans, setDisplayedPlans, isDaily }) => {
  const [addActivityPlanId, setAddActivityPlanId] = useState(0)
  const [editActivityActId, setEditActivityActId] = useState(0)

  const handleOpenEditForm = activityId => {
    setEditActivityActId(activityId)
    setAddActivityPlanId(0)
  }

  const handleOpenAddForm = planId => {
    setAddActivityPlanId(planId)
    setEditActivityActId(0)
  }

  return isDaily && displayedPlans !== null && displayedPlans.length === 0 ? (
    <InitializeDailyPlans setDailyPlans={setDisplayedPlans} />
  ) : (
    <section className="border-2 text-lightText padding-content ml-96">
      {displayedPlans &&
        displayedPlans.map(plan => (
          <div key={plan.id}>
            <div className="bg-medium my-2">{plan.title} </div>
            {plan.activities &&
              plan.activities.map(activity =>
                editActivityActId !== activity.id ? (
                  <Activity
                    key={activity.id}
                    planId={plan.id}
                    activity={activity}
                    setPlans={setDisplayedPlans}
                    openEditForm={() => handleOpenEditForm(activity.id)}
                  />
                ) : (
                  <ActivityForm
                    key={activity.id}
                    planId={plan.id}
                    theActivity={activity}
                    setPlans={setDisplayedPlans}
                    closeForm={() => setEditActivityActId(0)}
                  />
                )
              )}
            {addActivityPlanId !== plan.id ? (
              <button onClick={() => handleOpenAddForm(plan.id)} className="border-2 px-2">
                +
              </button>
            ) : (
              <ActivityForm
                planId={plan.id}
                setPlans={setDisplayedPlans}
                closeForm={() => setAddActivityPlanId(0)}
              />
            )}
          </div>
        ))}
    </section>
  )
}

export default Dashboard
