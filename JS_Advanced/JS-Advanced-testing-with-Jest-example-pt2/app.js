const getShoppingCartTotal = (cart) => {
  let total = 0;
  for (item of cart) {
    total += item.price * item.amount;
  }
  return total;
};

module.exports = getShoppingCartTotal;