# Find All Duplicates in an Array（数组中重复的数据）

**LeetCode 442**

- [英文版](https://leetcode.com/problems/find-all-duplicates-in-an-array/)

- [中文版](https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/)

## 题目
给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。

找到所有出现两次的元素。

你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？

示例：

```
输入:
[4,3,2,7,8,2,3,1]

输出:
[2,3]
```
## 思路
<details>
<summary>点击展开</summary>
元素的值在不超过数组的长度，我们遍历数组，将元素值映射的下标改为负数，当遇到负数时，说明该元素下标映射的值已经出现过了。
</details>

## 代码实现
| C | C++ | Java | Objective-C | Swift | Python | JavaScript | Go | PHP |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 🤔 | [😀](./FindAllDuplicates.cpp) | 🤔 | 🤔 | 🤔 | [😀](./FindAllDuplicates.py) | [😀](./FindAllDuplicates.js) | 🤔 | 🤔 |

