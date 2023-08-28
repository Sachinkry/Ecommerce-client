export default function getRandomProducts(products, num) {
  let randomProducts = [];
  let randomProduct;
  let randomIndex;

  // Create a copy of the products array to avoid mutating the original array
  let productsCopy = [...products];

  for (let i = 0; i < num; i++) {
    if (productsCopy.length === 0) {
      break;
    }

    randomIndex = Math.floor(Math.random() * productsCopy.length);
    randomProduct = productsCopy[randomIndex];
    randomProducts.push(randomProduct);

    // Remove the selected product from the productsCopy array
    productsCopy.splice(randomIndex, 1);
  }

  return randomProducts;
}