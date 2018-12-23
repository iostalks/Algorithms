# ClosestPairOfPoints（平面内两点的最短距离）
[GeeksforGeeks](https://www.geeksforgeeks.org/closest-pair-of-points-using-divide-and-conquer-algorithm/)

## 题目
给定平面上 n 个点，每个点坐标分别为 (x,y)，求其中的一对点，使得在 n 个点组成的所有点对中，该点对的距离最小。

## 思路
<details>
<summary>点击展开</summary>
1. 将所有点按照横坐标排序，取中间的点，将平面分成左右两部分，时间复杂度 O(nlogn);

2. 左边区域点对的最短距离为 dl，右边区域点对的最短距离为 dr, d = min(dl, dr);

3. 最短距离的点也能分布在左右两侧，并且横坐标在区间 [midX - d, midX + d]，纵坐标的差值小于等于 d 的区间内;

4. 过滤出位于 midX 左右两侧的目标点，并按照纵坐标大小排序，在 y1 - y2 <= d 的范围内符合要求的点不会超过 6 个；

5. 在一侧 d x d 的范围内，不能存在两个点的距离小于 d，否则在同一侧，d 的就不是最短距离了；

6. 如果一个点与另一个点的距离小于等于 d，在 d x d 的范围内会构成一个 1/4 半径等于 d 圆型，面积：`(d^2 * π)/4 = π*d^2/16`;

7. d x d 的区域可能存在 16/π ≈ 5.1 个这样的区域，所以符合条件的点不会超过 6 个；

8. 比较 d 和两侧区域最短距离，取最小值对应的点对即为目标解。
</details>

## 代码实现
| C | C++ | Java | Python | JavaScript | Go | PHP |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| [😀](./ClosestPairOfPoints.c) | 🤔 | 🤔 | 🤔 | 🤔 | 🤔 | 🤔 |

（点击 😀 可跳转到实现）
