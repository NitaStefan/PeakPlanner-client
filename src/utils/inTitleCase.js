const inTitleCase = text => {
  // List of words that should not be capitalized
  const exceptions = [
    "and",
    "or",
    "the",
    "a",
    "an",
    "in",
    "on",
    "at",
    "to",
    "for",
    "with",
    "but",
    "by",
    "of",
  ]

  return text
    .split(" ")
    .map((word, index, words) => {
      // Capitalize the first and last word, or words not in the exceptions list
      if (index === 0 || index === words.length - 1 || !exceptions.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
      return word
    })
    .join(" ")
}

export default inTitleCase
