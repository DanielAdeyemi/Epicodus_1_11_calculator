function add(number1, number2) {
  let result = number1 + number2;
  return result;
}

function substract(number1, number2) {
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
  $("form#add").submit(function(event) {
    event.preventDefault();
    let number1 = parseFloat($("#add1").val());
    let number2 = parseFloat($("#add2").val());
    let result = add(number1, number2);
    $("#outputAdd").text(result);
  });
});