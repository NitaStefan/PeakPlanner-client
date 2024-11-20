import workdayWeekendPlans from "../../utils/constants/createWorkWeekendDayPlans"
import daysOfWeekPlans from "../../utils/constants/createDaysOfWeekPlans"
import successfulDailyPlan from "../../utils/constants/createSuccessfulDailyPlan"
import persistDailyPlans from "../../utils/restApiRequests/persistDailyPlans"

const InitializeDailyPlans = ({ setDailyPlans }) => {
  const byWeekdayWeekend = async () => {
    const thePlans = await persistDailyPlans(workdayWeekendPlans)
    setDailyPlans(thePlans)
  }

  const byDaysOfWeek = async () => {
    const thePlans = await persistDailyPlans(daysOfWeekPlans)
    setDailyPlans(thePlans)
  }

  const bySuccessfulHabits = async () => {
    const thePlans = await persistDailyPlans(successfulDailyPlan)
    setDailyPlans(thePlans)
  }

  return (
    <div className="border-2 text-lightText padding-content ml-96">
      <p className="padding-content">How would you like to organize your week?</p>
      <button onClick={byWeekdayWeekend} className="border-2 padding-content mx-3">
        Per workday and weekend
      </button>
      <button onClick={byDaysOfWeek} className="border-2 padding-content mx-3">
        Per day of the week
      </button>
      <hr />
      <button className="border-2 padding-content mx-3" onClick={bySuccessfulHabits}>
        Based on the habits of the successful
      </button>
    </div>
  )
}

export default InitializeDailyPlans
