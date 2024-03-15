function generateList(array) {
  let result = "";

  for (let i = 0; i < array.length; i++) {
    result += "<ul>\n";

    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        if (Array.isArray(array[i][j])) {
          result += "    <li>\n";
          result += "        <ul>\n";

          for (let k = 0; k < array[i][j].length; k++) {
            result += "            <li>" + array[i][j][k] + "</li>\n";
          }
          result += "        </ul>\n";
          result += "    </li>\n";
        } else {
          result += "    <li>" + array[i][j] + "</li>\n";
        }
      }
    } else {
      result += "    <li>" + array[i] + "</li>\n";
    }

    result += "</ul>\n";
  }

  return result;
}

let exampleArray = [1, 2, [1.1, 1.2, 1.3], 2, 3, 4, [4.1, 4.2, 4.3, 4.4]];
console.log(generateList(exampleArray));
