/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let hash = {};
    for(let i = 0; i < nums.length; i++) {
        const j = target - nums[i];
        if(typeof(hash[j]) !== 'undefined') {
            return [hash[j], i];
        }
        hash[nums[i]] = i;
    }
    return [];
}
// Runtime: 52 ms

// const twoSum = (nums, target) => {
//     for(let i = 0; i < nums.length; i++) {        
//         for(let j = i+1; j < nums.length; j++) {
//             let sum = nums[i] + nums[j];
//             if(sum === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return [];
// };
// // Runtime: 116 ms