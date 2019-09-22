# Kth Largest Element in an Array（数组中的第K个最大元素）

**LeetCode 215**

- [英文版](https://leetcode.com/problems/kth-largest-element-in-an-array/)

- [中文版](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)

## 题目
在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:
```
输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
```
示例 2:
```
输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
```

说明:

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

## 思路
<details>
<summary>点击展开</summary>

题中有个要点容易误解，目标值位于数组从大到小排序的第 k 下标，而不是去重后按元素值从大到小的序位；

对于无序数组查找的场景，首先要想到的是二分查找，它的时间复杂度仅次于有序数组查找 O(n)。

对于二分比较关键的优化点是，pvoit 的确定，会影响实际的效率，工业算法一般会随机一个下标。

不过随机算法也有一定的开销，这题就直接用最右边的下标作为 pvoit 了。

这像是快排的简化版本。

二分查找是一种解法，另一个解法可以采用大顶堆，请自行尝试~
</details>

## 代码实现

| C++ | Java | Python | JavaScript | Go | PHP |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| [😀](KthLargestElement.cpp) | 🤔 | [😀](KthLargestElement.py) | [😀](./index.js) | 🤔 | 🤔 |
