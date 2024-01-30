const firstN = parseFloat(prompt("Please input the first number"));
const secondN = parseFloat(prompt("Please input the second number"));
const thirdN = parseFloat(prompt("Please input the third number"));

if (isNaN(firstN) || isNaN(secondN) || isNaN(thirdN)) {
  alert("Plase input correct numbers");
} else {
  let average = (firstN + secondN + thirdN) / 3;
  alert(`Arithmetic mean is: ${average}`);
}
