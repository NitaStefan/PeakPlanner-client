import InitializeDailyPlans from "./InitializeDailyPlans"
import ActivityForm from "./ActivityForm"
import { useState } from "react"
import Activity from "./Activity"
import inTitleCase from "../../utils/inTitleCase"
import getTimeConstraints from "../../utils/getTimeConstraints"
import calculateTimeInterval from "../../utils/calculateTimeInterval"
import calculateDateInterval from "../../utils/calculateDateInterval"
import addDurationStrings from "../../utils/addDurationStrings"
import BreakTime from "../BreakTime"

const Dashboard = ({ displayedPlans, setDisplayedPlans, isDaily }) => {
  const [addActivityToPlanId, setAddActivityToPlanId] = useState(0)
  const [showStepsForActId, setShowStepsForActId] = useState(0)

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
              {plan.activities.map((activity, index) => {
                const [prevActEndTime, nextActStartTime] = getTimeConstraints(
                  plan.activities,
                  index
                )

                let breakTime = ""
                if (index === 0) {
                  if (isDaily) {
                    breakTime = addDurationStrings(
                      calculateTimeInterval(lastActivityEndTime, "23:59"),
                      calculateTimeInterval("00:00", activity.startTime)
                    )
                    breakTime = addDurationStrings(breakTime, "1m")
                  }
                } else
                  breakTime = isDaily
                    ? calculateTimeInterval(prevActEndTime, activity.startTime)
                    : calculateDateInterval(prevActEndTime, activity.startTime)

                return (
                  <div key={activity.id}>
                    <BreakTime breakTime={breakTime} />
                    <Activity
                      isDaily={isDaily}
                      planId={plan.id}
                      activity={activity}
                      setPlans={setDisplayedPlans}
                      minTime={prevActEndTime}
                      maxTime={nextActStartTime}
                      showStepsForActId={showStepsForActId}
                      toggleShowSteps={actId =>
                        setShowStepsForActId(prevActId => (actId === prevActId ? 0 : actId))
                      }
                    />
                  </div>
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
