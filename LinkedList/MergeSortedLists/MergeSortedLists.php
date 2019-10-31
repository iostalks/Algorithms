<?php

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */
class Solution
{

    /**
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
    function mergeTwoLists($l1, $l2)
    {
        $pc = $newList = new ListNode(null);
        while ($l1 && $l2) {
            if ($l1->val <= $l2->val) {
                $newList->next = $l1;
                $newList = $newList->next;
                $l1 = $l1->next;
            } else {
                $newList->next = $l2;
                $newList = $newList->next;
                $l2 = $l2->next;
            }

        }
        $newList->next = $l1 ?? $l2;
        return $pc->next;
    }

    //递归
    function mergeTwoListsForRecursion($l1, $l2)
    {
        if (!$l1) return $l2;
        if (!$l2) return $l1;

        if ($l1->val <= $l2->val) {
            $l1->next = $this->mergeTwoLists($l1->next, $l2);
            return $l1;
        } else {
            $l2->next = $this->mergeTwoLists($l2->next, $l1);
            return $l2;
        }
    }
}