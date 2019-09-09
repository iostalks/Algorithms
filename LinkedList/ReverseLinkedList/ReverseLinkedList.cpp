/// 迭代
class Solution {
public:
    ListNode* reverseList(ListNode *head) {
        ListNode *prev = nullptr;
        ListNode *back;
        while(head) {
            back = head->next;
            head->next = prev;
            prev = head;
            head = back;
        }
        return prev;
    }
};


/// 递归一：
class Solution {
public:
    ListNode* _reverseList(ListNode *head, ListNode *prev = nullptr){
        if (head == nullptr) { return prev; }
        ListNode *back = head->next;
        head->next = prev;
        return _reverseList(back, head);
    }
    
    ListNode* reverseList(ListNode* head) {
        return _reverseList(head);
    }
};


/// 递归二：
class Solution {
public:
    ListNode* reverseList(ListNode *head) {
        if(head == nullptr || head->next == nullptr) { return head; }
        ListNode *new_head = reverseList(head->next);
        head->next->next = head;
        head->next = nullptr;
        return new_head;
    }
};
