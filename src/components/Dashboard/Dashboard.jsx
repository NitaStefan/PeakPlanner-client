import Interval from "./Interval"
import Description from "./Description"
import InitializeDailyPlans from "./InitializeDailyPlans"
import ActivityForm from "./ActivityForm"
import { useState } from "react"

const Dashboard = ({ displayedPlans, setDisplayedPlans, isDaily }) => {
  const [isAddingActivity, setIsAddingActivity] = useState(true)

  return isDaily && displayedPlans !== null && displayedPlans.length === 0 ? (
    <InitializeDailyPlans setDailyPlans={setDisplayedPlans} />
  ) : (
    <section className="border-2 text-lightText padding-content ml-96">
      {displayedPlans &&
        displayedPlans.map(plan => (
          <div key={plan.id}>
            <div className="bg-medium my-2">{plan.title} </div>
            {plan.activities &&
              plan.activities.map(activity => (
                <div key={activity.id} className="flex pl-4">
                  <Interval startTime={activity.startTime} endTime={activity.endTime} />
                  <Description
                    name={activity.name}
                    priority={activity.priority}
                    steps={activity.steps}
                  />
                </div>
              ))}
            <button className="border-2 px-2">+</button>
            {isAddingActivity && <ActivityForm planId={plan.id} setPlans={setDisplayedPlans} />}
          </div>
        ))}
    </section>
  )
}

export default Dashboard
