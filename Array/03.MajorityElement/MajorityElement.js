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
