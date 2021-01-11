function add(number1, number2) {
  let result = number1 + number2;
  return result;
}

function divide(number1, number2) {
  let result = number1 - number2;
  return result;
}

let number1 = parseFloat(prompt("Enter a number: "));
let number2 = parseFloat(prompt("Enter another number: "));

alert(divide(number1, number2));