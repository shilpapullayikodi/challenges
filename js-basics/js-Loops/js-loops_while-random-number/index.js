console.clear();

// `while` loop

let number = 0;
let count = 0;

// --v-- write/change code here --v--

// --^-- write/change code here --^--
while (number <= 0.9) {
  count++;
  console.log("The number is:", number);
  number = Math.random();
}
console.log(
  `The number that ended the loop was ${number} and it took ${count} rounds to do this!`
);
