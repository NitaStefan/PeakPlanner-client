export default async stepId => {
  try {
    const response = await fetch(`http://localhost:8080/api/steps/${stepId}`, {
      method: "DELETE",
    })

    if (!response.ok) throw new Error("Failed to delete step")
  } catch (error) {
    console.error("Error saving plans:", error)
  }
}
