function generateKey(length, symbols) {
  let result = "";
  const symbolsLength = symbols.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * symbolsLength);
    result += symbols.charAt(randomIndex);
  }
  return result;
}

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

const key = generateKey(16, characters);
console.log(key);
