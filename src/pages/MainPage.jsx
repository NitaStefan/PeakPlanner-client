import plans from "../utils/constants/mock_data"
import SideOverview from "../components/SideOverview"
import Dashboard from "../components/Dashboard/Dashboard"
import { useEffect, useState } from "react"

const MainPage = () => {
  // const goalPlans = plans.filter(plan => plan.type === "goal")
  // const dailyPlans = plans.filter(plan => plan.type === "daily")

  const [showDailyPlans, setShowDailyPlans] = useState(true)

  const [dailyPlans, setDailyPlans] = useState(null)
  const [goalPlans, setGoalPlans] = useState(null)

  useEffect(() => {
    fetch("http://localhost:8080/api/plans?type=ROUTINE")
      .then(res => res.json())
      .then(data => setDailyPlans(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/api/plans?type=GOAL")
      .then(res => res.json())
      .then(data => setGoalPlans(data))
  }, [])

  const displayedPlans = showDailyPlans ? dailyPlans : goalPlans
  const setDisplayedPlans = showDailyPlans ? setDailyPlans : setGoalPlans

  return (
    <main className="padding-y min-h-[600px]">
      <SideOverview dailyPlans={dailyPlans} goalPlans={goalPlans} />
      <Dashboard
        displayedPlans={displayedPlans}
        setDisplayedPlans={setDisplayedPlans}
        isDaily={showDailyPlans}
      />
    </main>
  )
}

export default MainPage
