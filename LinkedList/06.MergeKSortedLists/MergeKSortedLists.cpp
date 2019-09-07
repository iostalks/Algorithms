/*
* 递归
* Runtime: 324 ms
* Memory Usage: 43.1 MB
*/
class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        lists.erase(remove(lists.begin(), lists.end(), nullptr), lists.end());
        if(lists.empty()) { return nullptr; }
        auto min_iter = min_element(lists.begin(), lists.end(), [](ListNode *p1, ListNode *p2){ return p1->val < p2->val; });
        ListNode *minNode = *min_iter;
        *min_iter = (*min_iter)->next;
        if(*min_iter == nullptr) { lists.erase(min_iter); }
        minNode->next = mergeKLists(lists);
        return minNode;
    }
};

/*
* 分治1（迭代实现归并）
* Runtime: 24 ms
* Memory Usage: 11.1 MB
*/
class Solution {
public:
    ListNode* _mergeTwolists(ListNode* l1, ListNode* l2) {
        ListNode *dummy = new ListNode(0);
        ListNode *newHead = dummy;
        while (l1 && l2) {
            if(l1->val < l2->val) {
                dummy->next = l1;
                l1 = l1->next;
            }
            else {
                dummy->next = l2;
                l2 = l2->next;
            }
            dummy = dummy->next;
        }
        dummy->next = l1 ? l1 : l2;
        return newHead->next;
    }
    
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        if(lists.empty()) { return nullptr; }
        int interval = 1;
        while(interval < lists.size()) {
            for(int i=0; i<lists.size()-interval; i+=(interval*2)) {
                lists[i] = _mergeTwolists(lists[i], lists[i+interval]);
            }
            interval *= 2;
        }
        return lists[0];
    }
};

/*
* 分治2（递归实现归并）
* Runtime: 28 ms
* Memory Usage: 20.2 MB
*/
class Solution {
public:
    ListNode* _mergeTwolists(ListNode* l1, ListNode* l2) {
        ListNode *dummy = new ListNode(0);
        ListNode *newHead = dummy;
        while (l1 && l2) {
            if(l1->val < l2->val) {
                dummy->next = l1;
                l1 = l1->next;
            }
            else {
                dummy->next = l2;
                l2 = l2->next;
            }
            dummy = dummy->next;
        }
        dummy->next = l1 ? l1 : l2;
        return newHead->next;
    }
    
    ListNode* _mergeKLists(vector<ListNode*>& lists, int l, int r) {
        if (l == r) { return lists[l]; }
        int mid = (l+r) / 2;
        ListNode *l1 = _mergeKLists(lists, l, mid);
        ListNode *l2 = _mergeKLists(lists, mid+1, r);
        return _mergeTwolists(l1, l2);
    }
    
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        if(lists.empty()) { return nullptr; }
        return _mergeKLists(lists, 0, lists.size()-1);
    }
};