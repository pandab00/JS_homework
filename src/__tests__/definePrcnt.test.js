import { getPercents } from "../definePrcnt";

describe("get precents of enter number", () => {
  it("correctly number percent", () => {
    expect(getPercents(30, 200)).toBe(60);
  }),
    it("checking percentage from zero", () => {
      expect(getPercents(20, 0)).toBe(0);
    }),
    it("Checking for invalid input data", () => {
      expect(getPercents("abc", 120)).toBe(NaN);
    });
});
