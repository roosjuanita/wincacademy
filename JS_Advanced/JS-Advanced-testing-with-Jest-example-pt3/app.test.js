const getShoppingCartTotal = require('./app');

describe("getShoppingCartTotal", () => {
  // 'Sad' path test
  test('it should error when a price is missing', () => {
    expect(() => getShoppingCartTotal([{ amount: 4 }])).toThrow();
  });
});

