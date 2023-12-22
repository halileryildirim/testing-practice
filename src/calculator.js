const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    if (b === 0) {
      return;
    }
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

export default calculator;
