# Majority Element（求众数）
**LeetCode 169**

- [英文版](https://leetcode.com/problems/majority-element/)

- [中文版](https://leetcode-cn.com/problems/majority-element/)

## 题目
给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

示例 1:
```
输入: [3,2,3]
输出: 3
```

示例 2:
```
输入: [2,2,1,1,1,2,2]
输出: 2
```

## 思路
1. O(n) time and O(n) space

2. O(n) time and O(1) space
使用 major 变量记录众数，count 记录遇到 major +1，非 major -1，最终 count 会大于0，major 即代表众数。

## 代码实现
| C | C++ | Java | Python | JavaScript | PHP |
| :--: | :--: | :--: | :--: | :---: | :---: |
| 🤔 | 🤔 | 🤔 | 🤔 | [😀](./MajorityElement) | 🤔 |
