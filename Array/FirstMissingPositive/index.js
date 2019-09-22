/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;
    let i = 0;
    while (i < n) {
        if (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
            // swap nums[nums[i] - 1] and nums[i]
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
        } else {
            ++i;
        }
    }
    
    for (let i = 0; i < n; ++i) {
        if (nums[i] != i + 1) {
            return i + 1
        }
    }
    
    return nums.length + 1;
};