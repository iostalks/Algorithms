/// 迭代
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode *mergeNode = new ListNode(0);
        ListNode *newHead = mergeNode;
        while(l1 && l2) {
            if(l1->val < l2->val) {
                mergeNode->next = l1;
                l1 = l1->next;
            }
            else {
                mergeNode->next = l2;
                l2 = l2->next;
            }
            mergeNode = mergeNode->next;
        }
        mergeNode->next = l1 ? l1 : l2;
        return newHead->next;
    }
};

/// 递归
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        if (l1 && l2) {
            if(l1->val < l2->val){
                l1->next = mergeTwoLists(l1->next, l2);
                return l1;
            } 
            else {
                l2->next = mergeTwoLists(l1, l2->next);
                return l2;
            }
        }
        return l1 ? l1 : l2;
    }
};