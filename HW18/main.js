let arrayLength = parseInt(prompt("Введіть довжину масиву:"));
let array = [];

for (let i = 0; i < arrayLength; i++) {
  let element = prompt(`Введіть елемент для індексу ${i}:`);
  array.push(element);
}

console.log("Початковий масив:", array);

let sortedArray = array.slice();
sortedArray.sort(function (a, b) {
  return a - b;
});
console.log("Відсортований масив:", sortedArray);

let arrayAfterDeletion = sortedArray.slice();

arrayAfterDeletion.splice(1, 3);

console.log(
  "Масив після видалення елементів з 2 по 4 (включно):",
  arrayAfterDeletion
);
