import weekdayWeekendPlans from "../../utils/createWorkWeekDayPlans"
import daysOfWeekPlans from "../../utils/createDaysOfWeekPlans"
import saveDailyPlans from "../../utils/saveDailyPlans"

const InitializeDailyPlans = ({ setDailyPlans }) => {
  const byWeekdayWeekend = async () => {
    const thePlans = await saveDailyPlans(weekdayWeekendPlans)
    setDailyPlans(thePlans)
  }

  const byDaysOfWeek = async () => {
    const thePlans = await saveDailyPlans(daysOfWeekPlans)
    setDailyPlans(thePlans)
  }

  return (
    <div className="border-2 text-lightText padding-content ml-96">
      <p className="padding-content">How would you like to organize your week?</p>
      <button onClick={byWeekdayWeekend} className="border-2 padding-content mx-3">
        Per weekday and weekend
      </button>
      <button onClick={byDaysOfWeek} className="border-2 padding-content mx-3">
        Per day of the week
      </button>
    </div>
  )
}

export default InitializeDailyPlans
