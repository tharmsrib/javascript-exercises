const convertToCelsius = function(temperature) {
  let output = (temperature - 32)*5/9;
  return +output.toFixed(1)
};

const convertToFahrenheit = function(temperature) {
  let output = (temperature* 9/5) + 32;
  return +output.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
