const { succeed, fail, repair, get } = require("./enhancer.js");
// test away!
const item = { name: "tes1", durability: 50, enhancement: 16 };
describe("here ", () => {
  describe("repair()", () => {
    it("should repair and restore the durability to 100", () => {
      expect(repair(item).durability).toBe(100);
    });

    it("it should return a new object modified according to the rules", () => {
      expect(succeed(item).enhancement).toBe(17);
    });

    it("fail() should return an objec modified according to the rules", () => {
      expect(fail(item).durability).toBe(40);
    });
  });
});
