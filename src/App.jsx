import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/AuthPage"
import LandingPage from "./pages/LandingPage"
import MainPage from "./pages/MainPage"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="max-container padding-x">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
