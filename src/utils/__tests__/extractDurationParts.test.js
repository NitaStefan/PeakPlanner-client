import extractDurationParts from "../extractDurationParts"

import { describe, it, expect } from "vitest"

describe("extractDurationParts utility function", () => {
  it("should extract the duration values correctly", () => {
    expect(extractDurationParts("1d 2h 21m")).toEqual({ days: 1, hours: 2, minutes: 21 })
  })

  it("should handle missing duration parts", () => {
    expect(extractDurationParts("4h")).toEqual({ days: 0, hours: 4, minutes: 0 })
  })
})
