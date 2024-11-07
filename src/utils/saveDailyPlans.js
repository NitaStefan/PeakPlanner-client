export default async plans => {
  try {
    const response = await fetch("http://localhost:8080/api/plans/bulk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plans),
    })
    if (!response.ok) {
      throw new Error("Failed to save plans")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error saving plans:", error)
  }
}

//POST request to add a plan and get the updated plan back from the db
