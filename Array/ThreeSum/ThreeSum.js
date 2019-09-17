/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0, n = nums.length - 2; i < n; ++i) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            s = nums[i] + nums[l] + nums[r]; 
            if (s < 0) {
                l++;
            } else if ( s > 0) {
                r--;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l + 1]) {
                    l++;
                }
                while (l < r && nums[r] === nums[r - 1]) {
                    r--;
                }
                l++;
                r--;
            }
        }
    }
    return res;
};