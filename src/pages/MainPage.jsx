import SideOverview from "../components/SideOverview"
import Dashboard from "../components/Dashboard/Dashboard"
import { useState } from "react"
import usePlansOfType from "../components/hooks/usePlansOfType"

const MainPage = () => {
  const [showDailyPlans, setShowDailyPlans] = useState(true)

  const {
    plans: dailyPlans,
    setPlans: setDailyPlans,
    loading: loadingDaily,
  } = usePlansOfType("ROUTINE")

  const { plans: goalPlans, setPlans: setGoalPlans, loading: loadingGoal } = usePlansOfType("GOAL")

  const displayedPlans = showDailyPlans ? dailyPlans : goalPlans
  const setDisplayedPlans = showDailyPlans ? setDailyPlans : setGoalPlans
  const currentLoading = showDailyPlans ? loadingDaily : loadingGoal

  return (
    <main className="padding-y min-h-[600px]">
      <SideOverview
        dailyPlans={dailyPlans}
        goalPlans={goalPlans}
        setGoalPlans={setGoalPlans}
        setShowDailyPlans={setShowDailyPlans}
      />
      {currentLoading ? (
        <p className="border-2 border-tan text-lightText ml-72">Loading...</p>
      ) : (
        <Dashboard
          displayedPlans={displayedPlans}
          setDisplayedPlans={setDisplayedPlans}
          isDaily={showDailyPlans}
        />
      )}
    </main>
  )
}

export default MainPage
