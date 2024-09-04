import Counter1 from "./Counter";
import Counter2 from "./Counter";

console.log(Counter1.get(), Counter2.get());
// 0 0

Counter1.increment();
console.log(Counter1.get(), Counter2.get());
// 1 1

Counter2.increment();
console.log(Counter1.get(), Counter2.get());
// 2 2
