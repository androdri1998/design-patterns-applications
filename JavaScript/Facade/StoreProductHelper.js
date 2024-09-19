const products = new Map();
let index = 0;

const checkProduct = (name) => {
  return products.has(name);
};

const serializeName = (name) => {
  return name.toLowerCase();
};

const insertProduct = (name) => {
  index = index + 1;
  const newProduct = {
    name,
    createdAt: Date.now(),
    id: index,
  };

  products.set(name, newProduct);
  return newProduct;
};

module.exports = {
  checkProduct,
  serializeName,
  insertProduct,
};
