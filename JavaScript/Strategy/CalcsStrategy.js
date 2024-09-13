const CalcsStrategy = (operation) => {
  const methods = {
    sum: { execute: (a, b) => a + b },
    substract: { execute: (a, b) => a - b },
    multiply: { execute: (a, b) => a * b },
    divide: { execute: (a, b) => a / b },
  };

  const calcMethod = methods[operation];

  if (typeof calcMethod !== "object") {
    throw new Error("Operation not defined");
  }

  return calcMethod;
};

module.exports = CalcsStrategy;
