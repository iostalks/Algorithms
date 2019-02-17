/** O(n) 在元素大小分布均匀的情况下，这种解法可以认为复杂度是 O(n) 的
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (!nums || !nums.length) return [];
    if (k === 0) return nums;

    // 按照元素的从大到小保存元素在 nums 中下标
    // 如果新进来的元素比已有的元素大，需要先移除已有的元素
    // window 中元素的个数在 1~k
    let window = [];

    // 保存结果
    let res = [];

    for (let i = 0; i < nums.length; ++i) {
        // 如果最大值已经失效，将其移除
        // i > k 时最大值有可能已经出窗口了
        // 如果 window 中第一个元素的下标 + k <= i
        // 说明这个下标已经滑过窗口，不能再参与最大值比较了
        if (i >= k && window[0] <= i - k) {
            window.shift();
        }

        // 新元素与 window 中的最后一个（最小）元素对比
        // 如果比 window 中下标对应的元素大，就将 window 中的元素从后往前逐个移除
        while (window.length > 0 && nums[window.slice(-1)[0]] <= nums[i]) {
            window.pop();
        }

        // 添加新元素的下标
        window.push(i);

        // 从 i >= k - 1 开始每次迭代保存一个最大值
        // 第一个元素就是是最大值
        if (i >= k - 1) {
            res.push(nums[window[0]]);
        }
    }

    return res;
};
