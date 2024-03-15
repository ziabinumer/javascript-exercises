const add = function(a, b) {
  return a + b;
};


const subtract = function(a, b) {
	return a - b;
};

const sum = function(...args) {
	let sum = 0;
  args.forEach(element => {
    if (Array.isArray(element)) {
      element.forEach(arr_element => {
        sum += arr_element;
      });
    } else {
      sum += element;
    }
  });
  return sum;
};

const multiply = function(array) {
  let product = 1;
  array.forEach(element => {
    product *= element;
  })
  return product;
};

const power = function(a, b) {
  return Math.pow(a, b)
};

const factorial = function(a) {
	if (a > 1) return a * factorial(a - 1);
  return 1;
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
