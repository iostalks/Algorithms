/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* _reverseKGroup(ListNode* head) {
        ListNode *prev = nullptr, *curr = head, *back;
        while (curr) {
            back = curr->next;
            curr->next = prev;
            prev = curr;
            curr = back;
        }
        return prev;
    }
    
    ListNode* reverseKGroup(ListNode* head, int k) {
        ListNode *dummy = new ListNode(0); dummy->next = head;
        ListNode *end, *begin = head; // 链表首尾
        ListNode *back, *prev = dummy; // 前驱后继
        while(1){
            end = begin;
            for(int i=1; i<k && end; ++i) { end = end->next; }
            if(end == nullptr) { break; }
            back = end->next; // 记录后继
            // 链表反转
            end->next = nullptr;
            prev->next = _reverseKGroup(begin); // 连接前面已翻转链表
            begin->next = back; // 连接后面未翻转链表
            prev = begin; // 更新前驱
            begin = back; // 更新链表首
        }
        return dummy->next;
    }
};