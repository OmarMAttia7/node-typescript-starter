import { x } from "../index.js";

export default () => {
  describe("child suite", () => {
    it("checks if child suites are working", () => {
      expect(x).toEqual(1);
    });
  });
};
