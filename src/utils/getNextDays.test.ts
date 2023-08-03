import { getNextDays } from "./getNextDays";

describe("getNextDays", () => {
  it("should return next 5 days", () => {
    const days = getNextDays();

    expect(days.length).toBe(5);
  });

  it("should return next 5 days with correct format", () => {
    const days = getNextDays();

    days.forEach((day) => {
      expect(day).toMatch(/\d{2}\/\d{2}/);
    });
  });
});
