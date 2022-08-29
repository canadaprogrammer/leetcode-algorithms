// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const standard = strs[0];
  let standardArray = standard.split('');
  const standardLength = standardArray.length;
  const strsLength = strs.length - 1;
  let preIndex = -1;
  let notCommon = false;

  for (let s = 0; s < standardLength; s++) {
    for (let i = 1; i <= strsLength; i++) {
      if (strs[i].indexOf(standardArray[s]) != 0) {
        notCommon = true;
        preIndex = preIndex - 1;
        break;
      }
      preIndex = s;
      strs[i] = strs[i].substring(1);
    }
    if (notCommon) {
      break;
    }
  }
  return standard.substring(0, preIndex + 1);
};
