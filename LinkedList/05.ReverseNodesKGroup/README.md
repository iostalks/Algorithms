# Reverse Nodes in k-Group（k 个一组翻转链表）

**LeetCode 25**

- [英文版](https://leetcode.com/problems/reverse-nodes-in-k-group/)

- [中文版](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)

## 题目
给出一个链表，每 k 个节点一组进行翻转，并返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么将最后剩余节点保持原有顺序。

示例 :
```
给定这个链表：1->2->3->4->5

当 k = 2 时，应当返回: 2->1->4->3->5

当 k = 3 时，应当返回: 3->2->1->4->5
```

说明 :

你的算法只能使用常数的额外空间。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

## 思路
<details>
<summary>点击展开</summary>

用两个指针（prev、back）分别记录前驱后继，另外两个指针（begin、end）记录子链表首尾；子链表翻转后将其与`前面已翻转链表`和`后面未翻转链表`进行连接。

</details>

## 代码实现
| C | C++ | Java | Objective-C | Swift | Python | JavaScript | Go | PHP |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 🤔 | [😀](./ReverseNodesKGroup.cpp) | 🤔 | 🤔 | 🤔 | 🤔 | 🤔 | 🤔 | 🤔 |
