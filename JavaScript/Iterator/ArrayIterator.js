const ArrayIterator = (array = []) => {
  let index = 0;

  const hasItems = () => {
    return !(index + 1 === array.length);
  };

  const next = () => {
    if (index + 1 < array.length) {
      index++;
      return array[index];
    }

    return null;
  };

  const current = () => {
    return array[index];
  };

  const reset = () => {
    index = 0;
  };

  const isEmpty = () => {
    return array.length === 0;
  };

  return {
    hasItems,
    next,
    current,
    reset,
    isEmpty,
  };
};

module.exports = ArrayIterator;
