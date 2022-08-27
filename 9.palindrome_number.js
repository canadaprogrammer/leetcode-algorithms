// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// Runtime: 76ms
var isPalindrome = function (x) {
  let tempArray = x.toString().split('');
  let arrayLength = tempArray.length - 1;
  for (let i = 0; i < arrayLength / 2; i++) {
    let j = arrayLength - i;
    if (tempArray[i] != tempArray[j]) {
      return false;
    }
  }
  return true;
};
