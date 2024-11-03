import Interval from "./Interval"
import Description from "./Description"

const Dashboard = ({ displayedPlans }) => {
  return (
    <section className="border-2 text-lightText padding-content ml-96 ">
      {displayedPlans.map(plan => (
        <div key={plan.id}>
          <p>{plan.title}</p>
          {plan.activities.map(activity => (
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
