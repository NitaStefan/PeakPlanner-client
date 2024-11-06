import Interval from "./Interval"
import Description from "./Description"
import InitializeDailyPlans from "./InitializeDailyPlans"

const Dashboard = ({ displayedPlans, setDailyPlans, isDaily }) => {
  return isDaily && displayedPlans !== null && displayedPlans.length === 0 ? (
    <InitializeDailyPlans setDailyPlans={setDailyPlans} />
  ) : (
    <section className="border-2 text-lightText padding-content ml-96">
      {displayedPlans &&
        displayedPlans.map(plan => (
          <div key={plan.id}>
            <p>{plan.title}</p>
            {plan.activities &&
              plan.activities.map(activity => (
                <div key={activity.id} className="flex pl-4">
                  <Interval startTime={activity.startTime} endTime={activity.endTime} />
                  <Description name={activity.name} priority={activity.priority} steps={activity.steps} />
                </div>
              ))}
          </div>
        ))}
    </section>
  )
}

export default Dashboard
