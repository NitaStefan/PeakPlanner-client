import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/AuthPage"
import LandingPage from "./pages/LandingPage"
import MainPage from "./pages/MainPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  )
}
