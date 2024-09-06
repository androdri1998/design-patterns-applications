const { ComputerFactory } = require("./ComputerFactory");

const computerFactory = ComputerFactory();

const entryComputer = computerFactory.factory("entry");
console.log(entryComputer);
// { processor: 'entry', storageType: 'HD' }

const midComputer = computerFactory.factory("mid");
console.log(midComputer);
// { processor: 'mid', storageType: 'SSD' }

const highComputer = computerFactory.factory("high");
console.log(highComputer);
// { processor: 'high', storageType: 'SSD' }
