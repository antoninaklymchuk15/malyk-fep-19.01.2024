function averageNumbers(array) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
      count++;
    }
  }

  if (count === 0) {
    return 0; 
  }

  return sum / count;
}

let array = [`cat`,37, 23, `dog`,`zebra`, 32, `5bjb236`, 45, 57];
console.log(`Середнє арифметичне: ${averageNumbers(array)}`); 
