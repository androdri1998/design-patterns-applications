const ProductsObserver = require("./ProductsObserver");

const user1 = {
  update: (msg) => {
    console.log("User 1: ", msg);
  },
};
const user2 = {
  update: (msg) => {
    console.log("User 2: ", msg);
  },
};
const user3 = {
  update: (msg) => {
    console.log("User 3: ", msg);
  },
};

const productsObserver = ProductsObserver();

productsObserver.subscribe(user1, "videogames");
productsObserver.subscribe(user3, "videogames");
productsObserver.subscribe(user2, "smartphones");
productsObserver.subscribe(user1, "general");

productsObserver.notify("Smartphone 1", "smartphones");
// User 2:  Your Smartphone 1 of smartphones department it's available

productsObserver.notify("Videogame 1", "videogames");
// User 1:  Your Videogame 1 of videogames department it's available
// User 3:  Your Videogame 1 of videogames department it's available

try {
  productsObserver.notify("Other product 1", "other");
} catch (err) {
  console.log(err.message);
  // subscription type other undefined
}

productsObserver.notify("Other product 2", "general");
// User 1:  Your Other product 2 of general department it's available

productsObserver.unsubscribe(user3, "videogames");

productsObserver.notify("Videogame 2", "videogames");
// User 1:  Your Videogame 2 of videogames department it's available
