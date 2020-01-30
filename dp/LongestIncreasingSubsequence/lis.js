/*
先不考虑最长子序列，同一长度的递增子序列可能有多个，比如说 {2, 7, 5}，长度为 2 的子序列有 {2,5}, {2,7}，如果下一个元素是 6，那么 {2,7} 对我们来说没有意义，同一长度的子序列，我们只关心最小的尾数。

使用一个数组 tail 来保存每一种长度子序列最小的末尾元素, tail 将会是个递增数组。从数组第一个元素开始，逐个考察，如果元素比 tail 数组的末尾元素大，我们就将该元素添加进入 tail。

如果比 tail 小，就查找该元素所在的区间，用它替换 tail 元素中，比它大的最小的元素。因为 tail 是有序的，所以可以使用二分查找。
 **/

var lengthOfLIS = function(nums) {
    const n = nums.length;
    let tail = Array(n).fill(0);
    let s = 0; // tail 的长度
    for (let i = 0; i < n; ++i) {
        let l = 0;
        let r = s;
        // 二分查找
        while (l != r) {
            const m = ((l + r) / 2) | 0; // m 取整
            if (nums[i] > tail[m]) {
                l = m+1;
            } else {
                r = m;
            }
        }
        // 二分查找结束 l 对应目标放置位置
        tail[l] = nums[i];
        // 如果目标位置是 tail 的长度，说明是添加到尾部的
        if (l === s) ++s;
    }
    return s;
};

