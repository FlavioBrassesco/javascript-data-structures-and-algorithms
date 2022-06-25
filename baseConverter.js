const Stack = require("./Stack");

function baseConverter(decimalNumber, base) {
  let remainderStack = new Stack(),
  baseString = "",
  digits = "0123456789ABCDEF";

  // in each step divide the number by the base and store the remainder
  while(decimalNumber > 0) {
    const rem = Math.floor(decimalNumber % base);
    remainderStack.push(rem);
    decimalNumber = Math.floor(decimalNumber / base);
  }

  while(!remainderStack.isEmpty()) {
    baseString += digits[remainderStack.pop()];
  }

  return baseString;
}
module.exports = baseConverter;