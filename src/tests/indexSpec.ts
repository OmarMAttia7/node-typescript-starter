import { msg } from "../index.js";
describe("basic test", () => {

  it("checks if testing functionality is working", async () => {
    expect(msg).toEqual(msg);
  });

});