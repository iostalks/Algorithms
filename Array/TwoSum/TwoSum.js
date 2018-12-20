/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Two Sum.
var twoSum = function(nums, target) {
    let result = [];
    let numberIndexDict = {};
    for (let i = 0;  i < nums.length; i++) {
        const y = target - nums[i];
        if (typeof(numberIndexDict[y]) !== 'undefined') {
            return [numberIndexDict[y], i];
        }
        // 值作为 key，下标作为 value
        numberIndexDict[nums[i]] = i;
    }
    return null;
};
