/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    nums.forEach((num) => { result ^= num; });
    return result;
};

// 方法二，使用 reduce
var singleNumber = function(nums) {
  return nums.reduce((res, ele) => res^ele , 0);
}