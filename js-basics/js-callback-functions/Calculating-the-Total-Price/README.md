Calculating the Total Price
You have an array of products with prices, and you want to calculate the total price of all products using a callback function.

Create a function called calculateTotalPrice that takes two parameters products (an array of products) and extractPrice (a callback function).
Inside the calculateTotalPrice function, initialize a variable totalPrice to keep track of the total price and set its initial value to 0.
Use a loop, such as a for...of loop, to iterate through the array of products.
In each iteration of the loop, call the provided callback function with the current product as an argument to extract its price.
Add the extracted price to the totalPrice variable in each iteration of the loop.
After looping through all the products, return the total price as the result of the calculateTotalPrice function.
Create the callback function extractPrice, which should take a product as input and return its price.
Use the calculateTotalPrice function with the array of products and the callback function to calculate the total price.
You can use the following array of spices as a test case:

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
💡 Hint
Creating a Custom Map Function
Create a custom myMap function that takes an array and a callback function as parameters. It should apply the callback function to each element in the array, double each number, and return a new array containing the doubled numbers.

Create a function named myMap that takes two parameters: an array of numbers numbers and a callback function double.
Inside the myMap function, initialize an empty array to store the results.
Use a loop, such as a for loop, to iterate through the elements of the input array.
In each iteration of the loop, call the provided callback function with the current element as an argument to double the number.
Store the doubled result in the new array created in step 2.
After processing all elements, return the new array containing the doubled numbers.
Create a callback function double, that doubles a given number. This function should take an element as input and return the doubled value.
Use the myMap function with the array of numbers and the double callback function to create a new array containing the doubled numbers.
You can use the following array as a test case:

const numbers = [1, 2, 3, 4, 5];
💡 Hint
function myMap(numbers, double) {
// Your logic goes here
}

function double(number) {
return number \* 2;
}

const doubledNumbers = myMap(numbers, double);
console.log(doubledNumbers); // Output should be [2, 4, 6, 8, 10]
