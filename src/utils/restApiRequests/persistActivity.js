export default async (activity, planId) => {
  try {
    const response = await fetch(`http://localhost:8080/api/plans/${planId}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activity),
    })

    if (!response.ok) throw new Error("Failed to add activity")

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error saving plans:", error)
  }
}
