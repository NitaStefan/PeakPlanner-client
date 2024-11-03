import plans from "../utils/constants/mock_data"
import SideOverview from "../components/SideOverview"
import Dashboard from "../components/Dashboard/Dashboard"

const MainPage = () => {
  // get plans from rest api
  const goalPlans = plans.filter(plan => plan.type === "goal")
  const dailyPlans = plans.filter(plan => plan.type === "daily")

  const displayedPlans = dailyPlans

  return (
    <main className="padding-y">
      <SideOverview plans={plans} />
      <Dashboard displayedPlans={displayedPlans} />
    </main>
  )
}

export default MainPage
