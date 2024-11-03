const Priority = ({ priority }) => {
  let theFill = "#F5F5F5"
  switch (priority) {
    case "optional":
      theFill = "#F5F5F5"
      break
    case "light":
      theFill = "#6a994e"
      break
    case "medium":
      theFill = "#edb707"
      break
    case "high":
      theFill = "#ef233c"
      break
  }

  return (
    <svg
      className="inline-block float-right"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill={theFill}
    >
      <path d="M203-480h117q11 0 21 5.5t15 16.5l44 88 124-248q11-23 36-23t36 23l69 138h92q-15-102-93-171t-184-69q-106 0-184 69t-93 171Zm277 320q106 0 184-69t93-171H640q-11 0-21-5.5T604-422l-44-88-124 248q-11 23-36 23t-36-23l-69-138h-92q15 102 93 171t184 69Zm0 80q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440h80q0 116 82 198t198 82q116 0 198-82t82-198h80q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80ZM120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119h-80q0-116-82-198t-198-82q-116 0-198 82t-82 198h-80Zm240-400v-80h240v80H360Zm120 680q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0-280Z" />
    </svg>
  )
}

export default Priority
