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
     * @param ListNode $head
     * @param Integer $k
     * @return ListNode
     */
    function reverseKGroup($head, $k)
    {
        $dummy = new ListNode(-1);
        $pre = $cur = $dummy;
        $dummy->next = $head;
        $num = 0;
        while ($cur = $cur->next) ++$num;
        while ($num >= $k) {
            $cur = $pre->next;
            for ($i = 1; $i < $k; ++$i) {
                $t = $cur->next;
                $cur->next = $t->next;
                $t->next = $pre->next;
                $pre->next = $t;
            }
            $pre = $cur;
            $num -= $k;
        }
        return $dummy->next;
    }
}