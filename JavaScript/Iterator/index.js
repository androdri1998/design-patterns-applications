const ArrayIterator = require("./ArrayIterator");

const emptyIterator = ArrayIterator([]);
console.log(emptyIterator.isEmpty());
// true

const iterator = ArrayIterator([1, 2, 3, 4, 5]);
console.log(iterator.isEmpty());
// false

console.log(iterator.current());
// 1
while (iterator.hasItems()) {
  console.log(iterator.next());
  // 2
  // 3
  // 4
  // 5
}
console.log(iterator.next());
// null

iterator.reset();
console.log(iterator.current());
// 1
console.log(iterator.next());
// 2
