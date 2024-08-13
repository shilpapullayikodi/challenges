console.clear();
const products = [
  { name: "Saffron", price: 50 },
  { name: "Cinnamon", price: 6 },
  { name: "Cardamom", price: 12 },
  { name: "Turmeric", price: 9 },
  { name: "Paprika", price: 4 },
  { name: "Garam Masala", price: 10 },
  { name: "Vanilla Bean", price: 15 },
  { name: "Coriander", price: 6 },
];

function calculateTotalPrice(products, extractPrice) {
  let totalPrice = 0;

  for (const product of products) {
    const price = extractPrice(product);
    totalPrice += price;
  }

  return totalPrice;
}
function extractPrice(product) {
  return product.price;
}
const totalPrice = calculateTotalPrice(products, extractPrice);
console.log(totalPrice);
