import InitializeDailyPlans from "./InitializeDailyPlans"
import ActivityForm from "./ActivityForm"
import { useState } from "react"
import Activity from "./Activity"
import inTitleCase from "../../utils/inTitleCase"

const Dashboard = ({ displayedPlans, setDisplayedPlans, isDaily }) => {
  const [addActivityPlanId, setAddActivityPlanId] = useState(0)

  return isDaily && displayedPlans !== null && displayedPlans.length === 0 ? (
    <InitializeDailyPlans setDailyPlans={setDisplayedPlans} />
  ) : (
    <section className="border-2 text-lightText padding-content ml-72">
      {displayedPlans &&
        displayedPlans.map(plan => (
          <div key={plan.id}>
            <div className="bg-medium my-2">{inTitleCase(plan.title)} </div>
            {plan.activities &&
              plan.activities.map(activity => (
                // TODO: define time constraints based on previous activity
                <Activity
                  key={activity.id}
                  planId={plan.id}
                  activity={activity}
                  setPlans={setDisplayedPlans}
                />
              ))}
            {addActivityPlanId !== plan.id ? (
              <button onClick={() => setAddActivityPlanId(plan.id)} className="border-2 px-2">
                +
              </button>
            ) : (
              <ActivityForm
                isDaily={isDaily}
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
