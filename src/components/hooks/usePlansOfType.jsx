import { useState, useEffect } from "react"

const usePlansOfType = type => {
  const [plans, setPlans] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/plans?type=${type}`)
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        setPlans(data)
      } catch (err) {
        if (err.message === "Failed to fetch") alert("Unable to connect to the server")
      } finally {
        setLoading(false)
      }
    }

    fetchPlans()
  }, [])

  return { plans, setPlans, loading }
}

export default usePlansOfType
