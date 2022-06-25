const Stack = require("./Stack");

function decimalToBinary(decimalNumber) {
  let remainderStack = new Stack(),
    binaryString = "";

  while (decimalNumber > 0) {
    const rem = Math.floor(decimalNumber % 2);
    remainderStack.push(rem);
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  while (!remainderStack.isEmpty()) {
    binaryString += remainderStack.pop().toString();
  }

  return binaryString;
}
module.exports = decimalToBinary;