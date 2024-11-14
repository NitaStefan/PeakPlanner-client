export default async (step, stepId) => {
  try {
    const response = await fetch(`http://localhost:8080/api/steps/${stepId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(step),
    })

    if (!response.ok) throw new Error("Failed to update step")
  } catch (error) {
    console.error("Error saving plans:", error)
  }
}
