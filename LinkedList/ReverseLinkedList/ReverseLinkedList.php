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
     * @return ListNode
     */
    function reverseList($head)
    {
        $current = $head;
        $newList = null;
        while ($current) {
            $nextNode = $current->next;
            $current->next = $newList;
            $newList = $current;
            $current = $nextNode;
        }

        return $newList;
    }


    //recursion
    function reverseListForRecursion($head){

        if(!$head || !$head->next){
            return $head;
        }
        $newList=$this->reverseList($head->next);
        //we want n(k+1)'s next node to point k(n),so
        $head->next->next=$head;
        $head->next=null;
        return $newList;
    }
}