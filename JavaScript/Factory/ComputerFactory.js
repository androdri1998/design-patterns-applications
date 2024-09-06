const ComputerFactory = () => {
  const computers = {
    entry() {
      return { processor: "entry", storageType: "HD" };
    },

    mid() {
      return { processor: "mid", storageType: "SSD" };
    },

    high() {
      return { processor: "high", storageType: "SSD" };
    },
  };

  return {
    factory(type) {
      const makeComputer = computers[type];
      return makeComputer();
    },
  };
};

module.exports = {
  ComputerFactory,
};
