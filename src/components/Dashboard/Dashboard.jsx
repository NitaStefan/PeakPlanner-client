import InitializeDailyPlans from "./InitializeDailyPlans"
import ActivityForm from "./ActivityForm"
import { useState } from "react"
import Activity from "./Activity"
import inTitleCase from "../../utils/inTitleCase"
import getTimeConstraints from "../../utils/getTimeConstraints"

const Dashboard = ({ displayedPlans, setDisplayedPlans, isDaily }) => {
  const [addActivityPlanId, setAddActivityPlanId] = useState(0)

  return isDaily && displayedPlans !== null && displayedPlans.length === 0 ? (
    <InitializeDailyPlans setDailyPlans={setDisplayedPlans} />
  ) : (
    <section className="border-2 text-lightText padding-content ml-72">
      {displayedPlans &&
        displayedPlans.map(plan => {
          const lastActivityEndTime =
            plan.activities && plan.activities.length > 0
              ? plan.activities[plan.activities.length - 1].endTime
              : null

          return (
            <div key={plan.id}>
              <div className="bg-medium my-2">{inTitleCase(plan.title)} </div>
              {plan.activities &&
                plan.activities.map((activity, index) => {
                  const [minTime, maxTime] = getTimeConstraints(plan.activities, index)

                  return (
                    <Activity
                      isDaily={isDaily}
                      key={activity.id}
                      planId={plan.id}
                      activity={activity}
                      setPlans={setDisplayedPlans}
                      minTime={minTime}
                      maxTime={maxTime}
                    />
                  )
                })}

              {addActivityPlanId !== plan.id ? (
                !(isDaily && lastActivityEndTime >= "23:59") && (
                  <button onClick={() => setAddActivityPlanId(plan.id)} className="border-2 px-2">
                    +
                  </button>
                )
              ) : (
                <ActivityForm
                  isDaily={isDaily}
                  planId={plan.id}
                  setPlans={setDisplayedPlans}
                  closeForm={() => setAddActivityPlanId(0)}
                  minTime={lastActivityEndTime}
                  maxTime={null}
                />
              )}
            </div>
          )
        })}
    </section>
  )
}

export default Dashboard
