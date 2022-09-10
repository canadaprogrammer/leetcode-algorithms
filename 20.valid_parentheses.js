/**
 * @param {string} s
 * @return {boolean}
 */
// Method 1
const openParentheses = function (input) {
  return input == '{' || input == '[' || input == '(';
};
let temp_results = [];
const manageResults = function (input, closeP) {
  if (input == closeP) {
    temp_results.pop();
  } else if (openParentheses(input)) {
    temp_results.push(input);
  } else {
    return false;
  }
  return true;
};
var isValid = function (s) {
  let input_array = s.split('');
  let arr_length = input_array.length;
  if (arr_length % 2 !== 0) {
    return false;
  }
  temp_results.push(input_array[0]);
  for (let i = 1; i < arr_length; i++) {
    switch (temp_results.at(-1)) {
      case undefined:
        temp_results.push(input_array[i]);
        break;
      case '(':
        if (!manageResults(input_array[i], ')')) {
          return false;
        }
        break;
      case '{':
        if (!manageResults(input_array[i], '}')) {
          return false;
        }
        break;
      case '[':
        if (!manageResults(input_array[i], ']')) {
          return false;
        }
        break;
      default:
        return false;
    }
    console.log(temp_results, input_array[i]);
  }
  return temp_results.length === 0;
};

console.log(isValid('{[]}'));

// Method 2
var isValid1 = function (s) {
  const obj = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack = [];

  for (const para of s) {
    if (obj.hasOwnProperty(para)) {
      stack.push(para);
    } else {
      const closePara = stack.pop();
      if (para !== obj[closePara]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid1('{[]}{}'));
