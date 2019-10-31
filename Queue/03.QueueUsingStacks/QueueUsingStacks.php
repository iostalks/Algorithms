<?php

class MyQueue
{
    /**
     * Initialize your data structure here.
     */

    public $stock = [];
    public $temp = [];

    function __construct()
    {

    }

    /**
     * Push element x to the back of queue.
     * @param Integer $x
     * @return NULL
     */
    function push($x)
    {
        while (!empty($this->stock)) {
            array_unshift($this->temp, array_shift($this->stock));
        }
        array_unshift($this->stock, $x);

        while (!empty($this->temp)) {
            array_unshift($this->stock, array_shift($this->temp));
        }

    }

    /**
     * Removes the element from in front of queue and returns that element.
     * @return Integer
     */
    function pop()
    {
        return array_shift($this->stock);
    }

    /**
     * Get the front element.
     * @return Integer
     */
    function peek()
    {
        return current($this->stock);
    }

    /**
     * Returns whether the queue is empty.
     * @return Boolean
     */
    function empty()
    {
        return empty($this->stock);
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * $obj = MyQueue();
 * $obj->push($x);
 * $ret_2 = $obj->pop();
 * $ret_3 = $obj->peek();
 * $ret_4 = $obj->empty();
 */