// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  let sum = 0;
  let input = s;
  if (s.includes('IV')) {
    sum += 4;
    input = input.replace('IV', '');
  }
  if (s.includes('IX')) {
    sum += 9;
    input = input.replace('IX', '');
  }
  if (s.includes('XL')) {
    sum += 40;
    input = input.replace('XL', '');
  }
  if (s.includes('XC')) {
    sum += 90;
    input = input.replace('XC', '');
  }
  if (s.includes('CD')) {
    sum += 400;
    input = input.replace('CD', '');
  }
  if (s.includes('CM')) {
    sum += 900;
    input = input.replace('CM', '');
  }
  console.log(input);
  let remains = input.split('');
  remains.forEach((remain) => {
    switch (remain) {
      case 'I':
        sum += 1;
        break;
      case 'V':
        sum += 5;
        break;
      case 'X':
        sum += 10;
        break;
      case 'L':
        sum += 50;
        break;
      case 'C':
        sum += 100;
        break;
      case 'D':
        sum += 500;
        break;
      case 'M':
        sum += 1000;
        break;
    }
  });
  return sum;
};
