https://leetcode.com/problems/next-permutation/

1. 从右往左查找，找到第一个破坏递增序列的数，所在的下标 k，如果没找到返回原序列的逆序列;
2. 在 k 下标的右侧查找比 nums[k] 大的，下标最大的数 nums[l]。
3. 交换 nums[l] 和 nums[k];
4. 将 k 下标之后的元素，从小到大排序。
