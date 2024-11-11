export default async activityId => {
  try {
    const response = await fetch(`http://localhost:8080/api/activities/${activityId}`, {
      method: "DELETE",
    })

    if (!response.ok) throw new Error("Failed to delete activity")
  } catch (error) {
    console.error("Error saving plans:", error)
  }
}
