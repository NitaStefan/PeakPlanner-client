export default async (plan, planId) => {
  try {
    const response = await fetch(`http://localhost:8080/api/plans/${planId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plan),
    })

    if (!response.ok) throw new Error("Failed to update plan")
  } catch (error) {
    console.error("Error saving plans:", error)
  }
}
