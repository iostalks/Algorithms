/**
 * @note: 链表辅助类
 * @since 18-10-22 13:58 by jdk 1.8
 */

public class ListNode {
    public Integer val;
    public ListNode next;

    public ListNode(Integer val) {
        this.val = val;
    }


    public static ListNode buildListNode(int[] input) {
        ListNode first = null, last = null, newNode;
        if (input.length > 0) {
            for (int anInput : input) {
                newNode = new ListNode(anInput);
                newNode.next = null;
                if (first == null) {
                    first = newNode;
                    last = newNode;
                } else {
                    last.next = newNode;
                    last = newNode;
                }
            }
        }
        return first;
    }

    //给定指定的位置,然后创建一个环形链表。由尾部连接
    //1-2-3-4-5
    public static ListNode buildCycleNode(ListNode node, int n) {
        //空链表校验
        if (node == null) {
            return null;
        }
        //n　代表位置
        //如果是末尾的位置的话,那就不能自己相交
        ListNode head = new ListNode(0);
        head.next= node;
        ListNode currentNode = node;
        int findCount = 0;
        //找到尾部
        while (currentNode.next != null) {
            currentNode = currentNode.next;
        }
        //寻找指定n位置的节点
        //1-2-3-4-5
        while (findCount < n && head!=null) {
            ++findCount;
            head = head.next;
            if (findCount == n) {
                currentNode.next = head;
                break;
            }
        }
        return node;
    }


    public static void main(String[] args) {
        int[] a = {1, 2, 3, 4};
        ListNode listNode = buildListNode(a);
        ListNode listNode1 = buildCycleNode(listNode, 0);
        System.out.println(listNode1);
    }
}