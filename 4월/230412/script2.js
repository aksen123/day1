const number1 = document.querySelector("#num1");
const number2 = document.querySelector("#num2");
const btn = document.querySelector("button");
const result = document.querySelector("#result");

function gcd(a, b) {
  return a % b === 0 ? b : gcd(b, a % b)
}

btn.onclick = (e) => {
  // e.preventDefault();
  // result.value = gcd(parseInt(number1.value),  parseInt(number2.value))
  result.value = gcd(number1.value, number2.value)
}
