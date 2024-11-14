import InitializeDailyPlans from "./InitializeDailyPlans"
import ActivityForm from "./ActivityForm"
import { useState } from "react"
import Activity from "./Activity"
import inTitleCase from "../../utils/inTitleCase"
import getTimeConstraints from "../../utils/getTimeConstraints"
import calculateTimeInterval from "../../utils/calculateTimeInterval"
import calculateDateInterval from "../../utils/calculateDateInterval"

const Dashboard = ({ displayedPlans, setDisplayedPlans, isDaily }) => {
  const [addActivityToPlanId, setAddActivityToPlanId] = useState(0)

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
                  const [prevActEndTime, nextActStartTime] = getTimeConstraints(
                    plan.activities,
                    index
                  )
                  const breakTime = isDaily
                    ? calculateTimeInterval(prevActEndTime, nextActStartTime)
                    : calculateDateInterval(prevActEndTime, nextActStartTime)

                  return (
                    <Activity
                      isDaily={isDaily}
                      key={activity.id}
                      planId={plan.id}
                      activity={activity}
                      setPlans={setDisplayedPlans}
                      minTime={prevActEndTime}
                      maxTime={nextActStartTime}
                    />
                  )
                })}

              {addActivityToPlanId !== plan.id ? (
                !(isDaily && lastActivityEndTime >= "23:59") && (
                  <button onClick={() => setAddActivityToPlanId(plan.id)} className="border-2 px-2">
                    +
                  </button>
                )
              ) : (
                <ActivityForm
                  isDaily={isDaily}
                  planId={plan.id}
                  setPlans={setDisplayedPlans}
                  closeForm={() => setAddActivityToPlanId(0)}
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
