// O(n) time, O(n) space
var majorityElement = function(nums) {
    // O(n) 空间复杂度的解法
    const map = {}; // 存储元素出现的次数
    nums.forEach(ele => {
        if (!map[ele]) {
            map[ele] = 1;
        } else {
            map[ele] = map[ele] + 1;
        }
    });
    for (let key in map) {
        if (map[key] > nums.length / 2) { // 查找出现次数大于一半的元素
            return key;
        }
    }
    return null;
};

// O(n) time, O(1) space

const majorityElement2 = function(nums) {
    if (!nums || nums.length <= 0) return;
    let count = 0, cur = numbs[0];
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] === cur) {
            count++;
        } else {
            count--;
            if (count === 0) {
                cur = nums[i+1];
            }
        }
    }
    return cur;
}
