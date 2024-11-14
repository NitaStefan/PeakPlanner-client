export default async (step, activityId) => {
  try {
    const response = await fetch(`http://localhost:8080/api/activities/${activityId}/steps`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(step),
    })

    if (!response.ok) throw new Error("Failed to add step")

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error saving plans:", error)
  }
}
