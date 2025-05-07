const getShoppingCartTotal = require('./app');

describe("getShoppingCartTotal", () => {
  // New test
  test('it should return the correct total for a cart with two items', () => {
    const cart = [
      { price: 10, amount: 1 },
      { price: 5, amount: 3 },
    ];
    expect(getShoppingCartTotal(cart)).toBe(25);
  });
});

