const ProductsObserver = () => {
  const subscribers = {
    general: [],
    videogames: [],
    smartphones: [],
  };

  const subscribe = (instance, type) => {
    const subscriberType = type || "general";
    subscribers[subscriberType].push(instance);
  };

  const unsubscribe = (instance, type) => {
    const subscriberType = type || "general";
    subscribers[subscriberType] = subscribers[subscriberType].filter(
      (subscription) => instance !== subscription
    );
  };

  const notify = (productName, type) => {
    if (subscribers[type] === undefined) {
      throw new Error(`subscription type ${type} undefined`);
    }

    const subscriberType = type || "general";
    subscribers[subscriberType].forEach((subscription) => {
      subscription.update(
        `Your ${productName} of ${subscriberType} department it's available`
      );
    });
  };

  return {
    subscribe,
    unsubscribe,
    notify,
  };
};

module.exports = ProductsObserver;
