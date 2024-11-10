export default async (activity, activityId) => {
  try {
    const response = await fetch(`http://localhost:8080/api/activities/${activityId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activity),
    })

    if (!response.ok) throw new Error("Failed to update activity")
  } catch (error) {
    console.error("Error saving plans:", error)
  }
}
