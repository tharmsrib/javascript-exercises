const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a,b) {
	return a.reduce((a,b)=> a+b,0);
};

const multiply = function(a,b) {
  return a*b;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a,b) {
	return a%b;
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
