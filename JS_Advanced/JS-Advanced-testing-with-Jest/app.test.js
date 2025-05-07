const getShoppingCartTotal = require('./app');

describe("getShoppingCartTotal", () => {
   test("it should return 0 for an empty cart", () => {
       expect(getShoppingCartTotal([])).toBe(0);
   });
});