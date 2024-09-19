const StoreProductHelper = require("./StoreProductHelper");

const StoreProductsFacade = () => {
  const add = (name) => {
    const productName = StoreProductHelper.serializeName(name);
    const hasProduct = StoreProductHelper.checkProduct(productName);
    if (!hasProduct) {
      return StoreProductHelper.insertProduct(productName);
    }
  };

  return {
    add,
  };
};

module.exports = StoreProductsFacade;
