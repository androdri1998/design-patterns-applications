const CalcsStrategy = require("./CalcsStrategy");

try {
  const calc = CalcsStrategy("non-existent");
} catch (err) {
  console.log(err.message);
  // Operation not defined
}

const sum = CalcsStrategy("sum");
const substract = CalcsStrategy("substract");
const multiply = CalcsStrategy("multiply");
const divide = CalcsStrategy("divide");

console.log(sum.execute(4, 2));
// 6
console.log(substract.execute(4, 2));
// 2
console.log(multiply.execute(4, 2));
// 8
console.log(divide.execute(4, 2));
// 2
