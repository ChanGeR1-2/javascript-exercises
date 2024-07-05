const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(arr) {
    return arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function(num, power) {
	let prev = num;
    for (let i = 1; i < power; i++) {
        prev = num * prev;
    }
    return prev;
};

const factorial = function(num) {
  return helper(num);
  function helper(curr) {
      if (curr <= 1) return 1;
      return curr * helper(curr - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
