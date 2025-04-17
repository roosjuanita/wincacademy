'use strict';

// JS object destructuring

const product = {
    name: 'Organic Oat milk',
    origin: 'United States',
    brand: 'Oatyloa',
    price: 1.85,
    quantity: "1L",
    features: {
        isVegan: true,
        isOrganic: true,
        hasGluten: true,
    }
}


const { name:newName, quantity:newQuantity } = product;
console.log(`${newQuantity} of ${newName}`);

const { features: { isVegan, isOrganic, hasGluten} } = product;
console.log(isVegan, isOrganic, hasGluten); 

const { brand, productDescription = `${brand} ${newName} of ${newQuantity}` } = product;
console.log(productDescription); 

// const calculatePriceInclVat = (VAT, { price }) => {
//     const totalPrice = (price * VAT).toFixed(2);
//     console.log(`The total price is ${totalPrice}.`)
// }

// calculatePriceInclVat(VAT, product)

const VAT = 1.09;
const calculatePriceInclVat = (VAT, { price }) => (price * VAT).toFixed(2);
console.log(`The total price is €${calculatePriceInclVat(VAT, product)}.`);
