const getShoppingCartTotal = (cart) => {
  let total = 0;
  for (item of cart) {
    if (!item.hasOwnProperty('price')) {
      throw new Error('each item must have a price');
    }
    total += item.price * item.amount;
  }

  return total;
};

module.exports = getShoppingCartTotal;