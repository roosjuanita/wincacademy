'use strict';

// Discount calculator

const VAT_PERCENTAGE = 0;

const itemExists = (products, item) => {
    for (const product of products) {
        if (product.name === item.name) return true;
    }
    return false; // when the item can't be found in products
};

const getProductInfo = (products, item) => {
    for (const product of products) {
        if (product.name === item.name) return product;
    }
    return;
};

const addToCart = (cart, product) => {
    cart = [...cart, product];
    return cart;
};

const calculatePercentageDiscount = (product, item) => {
    const factor = product.discountPercentage;
    const discountPerItem = product.price * (factor/100);  
    return item.amount * discountPerItem;  
};

const calculate3for2Discount = (product, item) => {
    if (item.amount < 3) {
        return 0;
    }
  // How many times can we fit 3 inside item.amount?
    const rest = item.amount % 3;
    const times = (item.amount - rest) / 3;

  // For each 3 items bought we give a discount of 1 * price.
  // So the discount is: times * product.price.
  return times * product.price;
};

const calculateDiscount = (product, item) => {
    if (product.discountType === "percentage") {
        return calculatePercentageDiscount(product, item);
    }
    if (product.discountType === "3for2") {
        return calculate3for2Discount(product, item);
    }
    console.log("⚠️ This should not happen");  
};

const calculatePriceForItem = (product, item) => {
    let price = item.amount * product.price;
    if (product.discounted) {
    const discount = calculateDiscount(product, item);
    price -= discount;
    } 
    return price;
};

const addVAT = (amount, VAT_PERCENTAGE) => {
    const factor = (100 + VAT_PERCENTAGE) / 100;

    return amount * factor;
};

const calculateTotalPrice = (products, cart, VAT_PERCENTAGE) => {
let total = 0;

    for (const item of cart) {  
    if (!itemExists(products, item)) {
        console.log(`Item ${item.name} not found.`);
        // Stop calculation.
        return;
    }
    const product = getProductInfo(products, item);
    total += calculatePriceForItem(product, item);
    }
    total = addVAT(total, VAT_PERCENTAGE);

    return total;
};


const products = [
    {
    name: "bread",
    price: 2,
    discounted: true,
    discountType: "3for2",
    discountPercentage: 0
    },
    {
    name: "cucumber",
    price: 1,
    discounted: false,
    discountType: false,
    discountPercentage: 0
    },
    {
    name: "soda",
    price: 0.7,
    discounted: false,
    discountType: false,
    discountPercentage: 0
    },
    {
    name: "tomato",
    price: 2.20,
    discounted: true,
    discountType: "percentage",
    discountPercentage: 15
    },
    {
    name: "eggplant",
    price: 1.7,
    discounted: true,
    discountType: "3for2",
    discountPercentage: 0
    },
    {
    name: "crisps",
    price: 1.45,
    discounted: true,
    discountType: "percentage",
    discountPercentage: 40
    },
    {
    name: "spaghetti",
    price: 2.6,
    discounted: true,
    discountType: "3for2",
    discountPercentage: 0
    },
];

const cart = [
    {
    name: "bread",
    amount: 2
    },
    {
    name: "crisps",
    amount: 1
    },
];

let total = calculateTotalPrice(products, cart, VAT_PERCENTAGE);
console.log(`The total price is ${total.toFixed(2)}`);