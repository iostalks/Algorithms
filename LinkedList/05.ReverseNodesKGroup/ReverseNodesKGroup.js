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

/**
 * 迭代解法
 * 遍历链表，如果有 k 个，就翻转，然后将翻转后的 group 与已翻转和未翻转的链表合并
 */

 // Runtime: 68 ms, faster than 92.95% of JavaScript online submissions for Reverse Nodes in k-Group.
var reverseKGroup2 = function(head, k) {
	// 初始化一个节点用于指向头结点
	var dump = jump = new ListNode(0);
	dump.next = head;

	// l 前一个 group 的 head
	// r 后一个 group 的 head
	var l = r = head;

	while (true) {
		var count = 0;
		// r 移到下一组 group 的头部
		while (r && count < k) {
			r = r.next;
			count++;
		}
		// 翻转 [l, r) 之间的链表
		if (count === k) {
			let cur = l, pre = r;
			while(count--) {
				let tmp = cur.next;
				cur.next = pre;
				pre = cur;
				cur = tmp;
			}
			// 翻转后 pre 为当前 group 头节点
			// jump 为前一个 group 的尾结点或辅助节点
			// 将前一个 group 的尾结点指向当前 group 的节点
			jump.next = pre;
			// jump 指向当前 group 的最后一个节点
			jump = l;
			// l 指向下一组 group 的头节点
			l = r;
		} else {
			// 因为 dump 等于 jump 的初始
			// 而 jump 的初值的 next 指向链表的头部
			return dump.next;
		}
	}
};
