export default async planId => {
  try {
    const response = await fetch(`http://localhost:8080/api/plans/${planId}`, {
      method: "DELETE",
    })

    if (!response.ok) throw new Error("Failed to delete plan")
  } catch (error) {
    console.error("Error saving plans:", error)
  }
}
