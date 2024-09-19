const StoreProductsFacade = require("./StoreProductsFacade");

const storeProduct = StoreProductsFacade();
console.log(storeProduct.add("ProducT 1"));
// { name: 'product 1', createdAt: 1726713378856, id: 1 }
console.log(storeProduct.add("ProDucT 2"));
// { name: 'product 2', createdAt: 1726713378865, id: 2 }
console.log(storeProduct.add("PRODUCT 3"));
// { name: 'product 3', createdAt: 1726713378865, id: 3 }
