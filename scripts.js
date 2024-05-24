// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = ["Ashwin", "Sibongile", "Jan-Hendrik", "Sifso", "Shailen", "Frikkie"];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

console.log("Products:");
// Iterate over the products array, logging each product name.
products.forEach((product) => console.log(product.product));

console.log("Filtered by Name Length:");
// Filter out products with names longer than 5 characters.
const filteredProducts = products.filter((product) => product.product.length <= 5);
console.log(filteredProducts);

console.log("Price Manipulation:");
// Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce.
const totalPrice = products
  .filter((product) => product.price !== "" && !isNaN(parseFloat(product.price))) // Filter out products without prices or with non-numeric prices.
  .map((product) => parseFloat(product.price)) // Convert string prices to numbers.
  .reduce((total, price) => total + price, 0); // Calculate the total price using reduce.
console.log("Total Price:", totalPrice);

console.log("Concatenated Product Names:");
// Use reduce to concatenate all product names into a single string.
const concatenatedNames = products.reduce((result, product) => result + product.product + ", ", "");
console.log(concatenatedNames);

console.log("Find Extremes in Prices:");
// Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
const prices = products
  .map((product) => parseFloat(product.price))
  .filter((price) => !isNaN(price)); // Extract prices and filter out NaN values.
const highestPrice = Math.max(...prices); // Find the highest price.
const lowestPrice = Math.min(...prices); // Find the lowest price.
console.log(`Highest: ${highestPrice}. Lowest: ${lowestPrice}.`);

console.log("Object Transformation:");
// Using Object.entries and reduce, recreate the products object with keys 'name' and 'cost', maintaining their original values.
const transformedProducts = Object.entries(products).reduce((result, [key, value]) => {
  result[key] = { name: value.product, cost: parseFloat(value.price) || 0 }; // Transform each entry to have 'name' and 'cost' keys.
  return result;
}, {});

console.log(transformedProducts);
