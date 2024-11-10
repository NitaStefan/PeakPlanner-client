export default async plan => {
  try {
    const response = await fetch(`http://localhost:8080/api/plans`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plan),
    })

    if (!response.ok) throw new Error("Failed to add plan")

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error saving plans:", error)
  }
}
