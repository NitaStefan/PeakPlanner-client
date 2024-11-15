import extractDurationParts from "./extractDurationParts"

const getInitialStepValues = theStep => {
  const { days, hours, minutes } = extractDurationParts(theStep?.duration || "")
  return [days === 0 ? 1 : days, hours, minutes, theStep?.description || ""]
}

export default getInitialStepValues
