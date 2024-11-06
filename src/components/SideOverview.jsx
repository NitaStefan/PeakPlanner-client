const SideOverview = ({ dailyPlans, goalPlans }) => {
  return (
    <aside className="fixed w-80 border-2 rounded-lg padding-content">
      <div className="text-lightText">Daily Routine</div>
      <ul className="py-1">
        {dailyPlans &&
          dailyPlans.map(plan => (
            <li key={plan.id}>
              <a className="pl-4 text-lightText" href="#">
                {plan.title}
              </a>
            </li>
          ))}
      </ul>
      <div className="text-lightText">Goals</div>
      <ul className="py-1">
        {goalPlans &&
          goalPlans.map(plan => (
            <li key={plan.id}>
              <a className="pl-4 text-lightText" href="#">
                {plan.title}
              </a>
            </li>
          ))}
      </ul>
    </aside>
  )
}

export default SideOverview
