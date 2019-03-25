
/**
 * @note 查看链表是否有环, 相关辅助类在ListNode中给出
 * @apiNote  运用快慢节点，快节点一次两步，慢节点一次一步，如果有环，快慢节点一定相遇。
 * @since 19-3-18 15:33 by jdk 1.8
 */
public class LinkedListCycle {

    public static boolean hasCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }

    public static void main(String[] args) {
        int[] a = {1, 2, 3, 4, 5, 6};
        ListNode listNode = ListNode.buildListNode(a);
        ListNode cycleNode = ListNode.buildCycleNode(listNode, 3);
        boolean b = hasCycle(cycleNode);
        System.out.println(b);
    }
}
