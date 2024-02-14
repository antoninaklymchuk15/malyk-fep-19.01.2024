function pow(num, degree) {
  if (degree === 0) {
    return 1;
  }
  
  if (degree === 1) {
    return num;
  }
  
  return num * pow(num, degree - 1);
}


const num = parseFloat(prompt("Введіть число:"));
const degree = parseInt(prompt("Введіть степінь:"));

if (!isNaN(num) && !isNaN(degree)) {
  alert(`Результат:${num}^${degree}=${pow(num, degree)}`);
} else {
  alert("Будь ласка, введіть коректні значення.");
}