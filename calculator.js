let result = document.getElementById('result');

function appendNumber(number) {
  result.value += number;
console.log("Javascript");
}

function appendOperator(operator) {
  result.value += operator;
}

function appendDecimal() {
  result.value += '.';
}

function clearResult() {
  result.value = '';
}

function calculate() {
  result.value = eval(result.value);
}