/*
67. Add Binary
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Example 3:
Input: 
  a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
  b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
Output: "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"

Constraints:
1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

/*
var addBinary = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = sum = 0;
  let result = '';
  while(i >= 0 || j >= 0) {
      sum = carry;
      if(i >= 0) {
          sum += Number(a[i--]);
      }
      if(j >= 0) {
          sum += Number(b[j--]);
      }
      result = sum % 2 + result;
      carry = parseInt(sum / 2);
  }
  if(carry > 0) {
      result = 1 + result;
  }
  return result;
}
*/
/*
Newer versions of JavaScript -- specifically ECMAScript 6 -- 
have added support for binary (prefix 0b), octal (prefix 0o) and hexadecimal (prefix: 0x) numeric literals
*/
var addBinary = function (a, b) {
  const aBin = `0b${a}`;
  const bBin = `0b${b}`;
  const sum = BigInt(aBin) + BigInt(bBin);
  return sum.toString(2);
};
