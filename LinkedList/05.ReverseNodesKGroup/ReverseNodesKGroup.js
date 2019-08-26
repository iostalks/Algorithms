// 以 k 为一组翻转链表
// https://leetcode.com/problems/reverse-nodes-in-k-group/
//
/**
 * 题解，递归解法
 * 1. 尝试将头结点后移动 k 位，如果不足 k 位，直接返回头结点
 * 2. 如果存在 k 个结点，用新的头结点，递归
 * 3. 得到的结果连接到头 k 的节点的逆序链表后面
 * 4. 重新设置头结点，返回
 */
var reverseKGroup = function(head, k) {
	let curr = head;
	let count = 0;
	while (curr && count != k) {
		curr = curr.next;
		++count;
	}
	if (count === k) {
		curr = reverseKGroup(curr, k);

		while (count-- > 0) {
			let tmp = head.next;
			head.next = curr;
			curr = head;
			head = tmp;
		}
		head = curr;
	}
	return head;
};

