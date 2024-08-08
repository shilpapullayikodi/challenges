//console.clear();

let operand1 = 12;
const operand2 = 4;
let operandSum;
let operandSubtract;
let operandMultiply;
let operandDivide;
let operandRaise;
let operandmodulo;
/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  operandSum = operand1 + operand2;
  console.log(
    "Sum of  " + operand1 + " and " + operand2 + " is: " + operandSum
  );

  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
});

subtractButton.addEventListener("click", () => {
  operandSubtract = operand1 - operand2;
  console.log(
    "Substraction of " +
      operand1 +
      " and " +
      operand2 +
      " is: " +
      operandSubtract
  );

  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.
});

multiplyButton.addEventListener("click", () => {
  operandMultiply = operand1 * operand2;
  console.log(
    "Multiplication of " +
      operand1 +
      " and " +
      operand2 +
      " is: " +
      operandMultiply
  );

  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.
});

divideButton.addEventListener("click", () => {
  operandDivide = operand1 / operand2;
  console.log(
    "Division of " + operand1 + " and " + operand2 + " is: " + operandDivide
  );

  // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
});

exponentButton.addEventListener("click", () => {
  operandRaise = operand1 ** operand2;
  console.log(
    operand1 + " raise to the power of " + operand2 + " is: " + operandRaise
  );

  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
});

moduloButton.addEventListener("click", () => {
  operandmodulo = operand1 % operand2;
  console.log(operand1 + " Mod " + operand2 + " is: " + operandmodulo);
  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  operand1++;
  console.log("Answer:" + operand1);
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
});

increaseByFiveButton.addEventListener("click", () => {
  operand1 += 5;
  console.log(operand1);
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
});

decreaseByOneButton.addEventListener("click", () => {
  operand1--;
  console.log(operand1);
  // 9. Decrease the value of "operand1" by 5. Log the new value to the console.
});

decreaseByFiveButton.addEventListener("click", () => {
  operand1 += 5;
  console.log(operand1);
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
});

multiplyByTwoButton.addEventListener("click", () => {
  operand1 *= 2;
  console.log(operand1);

  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
});

divideByTwoButton.addEventListener("click", () => {
  result = operand1 / 2;
  console.log(
    "Divide the value of " + operand1 + " by 2 and the answer is: " + result
  );

  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
});
