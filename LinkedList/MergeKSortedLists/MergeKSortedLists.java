
/**
 * @note 合并K个有序链表，相关辅助类在ListNode中给出
 * @apiNote 这个我需要采用merge算法，一次合并两个(归并排序思想)
 * @since 19-3-18 15:50 by jdk 1.8
 */
public class MergeKSortedLists {

    public  ListNode mergeKLists(ListNode[] lists) {
        return mergeList(lists,0,lists.length-1);
    }

    public   ListNode mergeList(ListNode[] listNodes, int begin, int end) {
        if (begin > end) {
            return null;
        }
        if (begin == end)
            return listNodes[begin];
        int mid = (begin +end)>> 1;
        ListNode listNode1 = mergeList(listNodes, begin, mid);
        ListNode listNode2 = mergeList(listNodes, mid + 1, end);
        ListNode merges = merge(listNode1, listNode2);
        return merges;
    }

    private   ListNode merge(ListNode a, ListNode b) {
        ListNode listNode = new ListNode(0);
        ListNode currentNode= listNode;
        //接下来要砍头的
        while (true) {
            if (a == null && b == null) {
                break;
            } else if (a != null && (b == null || a.val <= b.val)) {
                currentNode.next = a;
                a = a.next;
            } else if (a == null || b.val < a.val) {
                currentNode.next = b;
                b = b.next;
            }
            currentNode = currentNode.next;
        }
        return listNode.next;
    }


    public static void main(String[] args) {
        ListNode[] nodes = new ListNode[3];
        ListNode listNode1 = ListNode.buildListNode(new int[]{1, 1, 3, 4});
        ListNode listNode2 = ListNode.buildListNode(new int[]{1, 2, 2, 3});
        ListNode listNode3 = ListNode.buildListNode(new int[]{1, 3, 5, 6});
        nodes[0] = listNode1;
        nodes[1] = listNode2;
        nodes[2] = listNode3;
        ListNode listNode = new Solution5().mergeList(nodes, 0, 2);
        System.out.println(listNode);
    }
}
