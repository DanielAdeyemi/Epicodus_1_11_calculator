function add(number1, number2) {
  let result = number1 + number2;
  return result;
}

function subtract(number1, number2) {
  let result = number1 - number2;
  return result;
}

function divide(number1, number2) {
  let result = number1 / number2;
  return result;
}

function multiply(number1, number2) {
  let result = number1 * number2;
  return result;
}


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let number1 = parseFloat($("#add1").val());
    let number2 = parseFloat($("#add2").val());
    let operator = $("input:radio[name=operator]:checked").val();
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    }
    $("#output").text(result);
  });
});