/*
35. Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//   let num_length = nums.length;
//   for(let i = 0; i < num_length; i++) {
//       if(nums[i] > target || nums[i] == target) {
//           return i;
//       }
//   }
//   return num_length;
// };

var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  if (start === end) {
    if (nums[start] >= target) {
      return start;
    } else {
      return start + 1;
    }
  }
};
