let table = document.createElement("table");
let number = 1;
for (let i = 0; i < 10; i++) {
  let row = table.insertRow(i);

  for (let j = 0; j < 10; j++) {
    let cell = row.insertCell(j);
    cell.innerHTML = number;
    number++;
  }
}

document.getElementById("container").appendChild(table);
