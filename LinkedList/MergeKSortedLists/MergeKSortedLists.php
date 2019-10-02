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
     * @param ListNode[] $lists
     * @return ListNode
     *暴力破解法
     * 取出所有的数 排序 重新生成一个新的链表
     */
    function mergeKLists($lists)
    {
        $res = [];
        for ($i = 0; $i < count($lists); $i++) {
            $node = $lists[$i];
            while ($node) {
                $res[] = $node->val;
                $node = $node->next;
            }
        }
        // sort($res); 不使用php内置函数排序
        $res = $this->merge_sort($res);
        $result = $newList = new listNode(-1);

        foreach ($res as $item) {
            $newList->next = new listNode($item);
            $newList = $newList->next;

        }
        return $result->next;
    }

    function merge_sort($nums)
    {
        if (count($nums) <= 1) {
            return $nums;
        }
        $this->merge_sort_c($nums, 0, count($nums) - 1);
        return $nums;
    }

    function merge_sort_c(&$nums, $p, $r)
    {
        if ($p >= $r) {
            return;
        }
        $middle = $p + (($r - $p) >> 1);
        $this->merge_sort_c($nums, $p, $middle);
        $this->merge_sort_c($nums, $middle + 1, $r);
        $this->merge($nums, ['start' => $p, 'end' => $middle], ['start' => $middle + 1, 'end' => $r]);
    }

    function merge(&$nums, $array_p, $array_r)
    {
        $temp = [];
        $p = $array_p['start'];
        $r = $array_r['start'];
        $k = 0;
        while ($p <= $array_p['end'] && $r <= $array_r['end']) {
            if ($nums[$p] < $nums[$r]) {
                $temp[$k++] = $nums[$p++];
            } else {
                $temp[$k++] = $nums[$r++];
            }
        }
        while ($p <= $array_p['end']) {
            $temp[$k++] = $nums[$p++];
        }
        while ($r <= $array_r['end']) {
            $temp[$k++] = $nums[$r++];
        }

        for ($i = 0; $i < $k; $i++) {
            $nums[$i + $array_p['start']] = $temp[$i];
        }

    }


}