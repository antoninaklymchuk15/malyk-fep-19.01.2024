console.log(`Task 1`);
for (let i = 20; i <= 30; i += 0.5) {
  console.log(i);
}

console.log(`Task 2`);
for (let i = 10; i <= 100; i += 10) {
  console.log(i * 27);
}

console.log(`Task 3`);
const userPrompt1 = prompt(`Please input number N (task 3)`);

for (let i = 1; i <= 100; i++) {
  if (i * i >= userPrompt1) {
    break;
  }
  console.log(i * i);
}

console.log(`Task 4`);
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let inputNumber = parseInt(prompt(`Please input integer number (task 4) :`));

if (isPrime(inputNumber)) {
  console.log(`${inputNumber} - is prime `);
} else {
  console.log(`${inputNumber} - is not prime`);
}

console.log(`Task 5`);
function isPower(p) {
  if (p <= 0) {
    return false;
  }
  while (p !== 1) {
    if (p % 3 !== 0) {
      return false;
    }
    p /= 3;
  }
  return true;
}

let inputN = parseInt(prompt(`Please input number (task 5)`));

if (isPower(inputN)) {
  console.log(
    `${inputN} you can get it by reducing the number 3 to a certain power`
  );
} else {
  console.log(
    `${inputN} you can NOT get it by reducing the number 3 to a certain power`
  );
}
