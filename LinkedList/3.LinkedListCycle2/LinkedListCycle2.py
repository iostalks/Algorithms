class Solution(object):
    def detectCycle(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head or not head.next: return None

        try:
            slow = head
            fast = head.next
            while slow is not fast:
                slow = slow.next
                fast = fast.next.next
        except:
            return None

        slow = slow.next
        helpNode = head
        while slow is not helpNode:
            slow = slow.next
            helpNode = helpNode.next

        return slow

