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

// 1. ForEach Basics:
// Iterate over each name and province, then log them to the console.
names.forEach((name, index) => {
  console.log(name, provinces[index]);
});

// Output each name with a matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// 2. Uppercase Transformation:
// Create a new array of province names in all uppercase.
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces);

// 3. Name Lengths:
// Create a new array containing the length of each name.
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// 4. Sorting:
// Alphabetically sort the provinces.
const sortedProvinces = provinces.slice().sort();
console.log(sortedProvinces);

// 5. Filtering Cape:
// Remove provinces containing "Cape" and log the count of remaining provinces.
const filteredProvinces = provinces.filter((province) => !province.includes("Cape"));
console.log("Remaining provinces count:", filteredProvinces.length);

// 6. Finding 'S':
// Create a boolean array indicating whether each name contains the letter 'S'.
const containsS = names.map((name) => name.includes("S"));
console.log(containsS);

// 7. Creating Object Mapping:
// Transform the names array into an object mapping names to their respective provinces.
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

console.log(nameProvinceMap);
