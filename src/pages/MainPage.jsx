import SideOverview from "../components/SideOverview"
import plans from "../utils/constants/mock_data"

const MainPage = () => {
  // get plans from rest api

  return (
    <main className="padding-y">
      <SideOverview plans={plans} />
    </main>
  )
}

export default MainPage
