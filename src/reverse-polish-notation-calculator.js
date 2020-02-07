'use strict';

function reversePolishNotationCalculator(input) {
  let result = 0;
  input = input.split(' ');

  for (let i = 0; i < input.length; i++) {
    if ('+-*/'.includes(input[i])) {
      input[i] = result = eval(input[i - 2] + ' ' + input[i] + ' ' + input[i - 1]);
      input.splice(i - 2, 2);
      i -= 2;
    }
  }

  return result;
};

module.exports = {reversePolishNotationCalculator};
