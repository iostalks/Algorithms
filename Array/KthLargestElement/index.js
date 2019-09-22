/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 时间复杂度 O(NlogN)
var findKthLargest = function(nums, k) {
  // 二分查找
  const quickSelect = (nums, left, right, tIndex) => {
    const pvoit = nums[right];
    let l = left, r = right;
    while (l < r) {
      // 左边跳过比 pvoit 大的数
      while (nums[l] > pvoit && l < r) l++;
      // 右边跳过不大于 pvoit 的数
      while (nums[r] <= pvoit && l < r) r--;
      // 此时 num[l] 一定大于或等于 nums[r]，交换它们
      [nums[l], nums[r]] = [nums[r], nums[l]];
    }
    // 一次二分结束，将 pvoit 交换的中间位置
    [nums[right], nums[l]] = [nums[l], nums[right]];

    if (tIndex > l) {
      // 目标值在右边
      return quickSelect(nums, l + 1, right, tIndex);
    } else if (tIndex < l) {
      // 目标值在左边
      return quickSelect(nums, left, l - 1, tIndex);
    } else {
      return nums[l];
    }
  }
  
  return quickSelect(nums, 0, nums.length - 1, k - 1);
};