import extractDurationParts from "./extractDurationParts"

const getInitialStepValues = theStep => {
  return [
    ...Object.values(extractDurationParts(theStep?.duration || "")),
    theStep?.description || "",
  ]
}

export default getInitialStepValues
