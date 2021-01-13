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

  $("form#substract").submit(function(event) {
    event.preventDefault();
    let number1 = parseFloat($("#sub1").val());
    let number2 = parseFloat($("#sub2").val());
    let result = substract(number1, number2);
    $("#outputSub").text(result);
  });

  $("form#mult").submit(function(event) {
    event.preventDefault();
    let number1 = parseFloat($("#mult1").val());
    let number2 = parseFloat($("#mult2").val());
    let result = multiply(number1, number2);
    $("#outputMult").text(result);
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    let number1 = parseFloat($("#div1").val());
    let number2 = parseFloat($("#div2").val());
    let result = divide(number1, number2);
    $("#outputDivide").text(result);
  });
});