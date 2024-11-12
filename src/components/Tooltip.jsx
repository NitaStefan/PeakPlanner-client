const Tooltip = ({ isVisible, type = "CLASSIC", content }) => {
  if (!isVisible) return null

  let bgColor = null
  switch (type) {
    case "CLASSIC":
      bgColor = "bg-gray-900"
      break
    case "ERROR":
      bgColor = "bg-red-400"
      break
  }

  return (
    <div
      class={`${bgColor} absolute bottom-full -translate-y-3 z-10 inline-block px-3 py-2 text-sm font-medium text-white rounded-lg`}
    >
      {content}
    </div>
  )
}

export default Tooltip
