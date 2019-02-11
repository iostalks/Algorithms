package main

import "fmt"

type Node struct {
	val  int
	next *Node
	prev *Node
}

type MyCircularDeque struct {
	capacity int
	size     int
	head     *Node
	tail     *Node
}

/** Initialize your data structure here. Set the size of the deque to be k. */
func Constructor(k int) MyCircularDeque {
	return MyCircularDeque{capacity: k}
}

/** Adds an item at the front of Deque. Return true if the operation is successful. */
func (this *MyCircularDeque) InsertFront(value int) bool {

	if this.IsFull() {
		return false
	}

	if this.head == nil {
		this.head = &Node{val: value}
		this.tail = this.head
	} else {
		node := &Node{val: value}
		node.next = this.head
		this.head.prev = node
		this.head = node
	}

	this.size++

	return true
}

/** Adds an item at the rear of Deque. Return true if the operation is successful. */
func (this *MyCircularDeque) InsertLast(value int) bool {
	if this.IsFull() {
		return false
	}

	if this.tail == nil {
		this.tail = &Node{val: value}
		this.head = this.tail
	} else {
		node := &Node{val: value}
		this.tail.next = node
		node.prev = this.tail
		this.tail = node
	}

	this.size++

	return true
}

/** Deletes an item from the front of Deque. Return true if the operation is successful. */
func (this *MyCircularDeque) DeleteFront() bool {
	if this.IsEmpty() {
		return false
	}

	if this.size == 1 {
		this.head = nil
		this.tail = nil
	} else {
		this.head.next.prev = nil
		this.head = this.head.next
	}

	this.size--

	return true

}

/** Deletes an item from the rear of Deque. Return true if the operation is successful. */
func (this *MyCircularDeque) DeleteLast() bool {
	if this.IsEmpty() {
		return false
	}

	if this.size == 1 {
		this.head = nil
		this.tail = nil
	} else {
		this.tail.prev.next = nil
		this.tail = this.tail.prev
	}

	this.size--

	return true
}

/** Get the front item from the deque. */
func (this *MyCircularDeque) GetFront() int {
	if this.IsEmpty() {
		return -1
	}

	return this.head.val
}

/** Get the last item from the deque. */
func (this *MyCircularDeque) GetRear() int {
	if this.IsEmpty() {
		return -1
	}

	return this.tail.val
}

/** Checks whether the circular deque is empty or not. */
func (this *MyCircularDeque) IsEmpty() bool {
	return this.size == 0
}

/** Checks whether the circular deque is full or not. */
func (this *MyCircularDeque) IsFull() bool {
	return this.size == this.capacity
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * obj := Constructor(k);
 * param_1 := obj.InsertFront(value);
 * param_2 := obj.InsertLast(value);
 * param_3 := obj.DeleteFront();
 * param_4 := obj.DeleteLast();
 * param_5 := obj.GetFront();
 * param_6 := obj.GetRear();
 * param_7 := obj.IsEmpty();
 * param_8 := obj.IsFull();
 */

func main() {
	obj := Constructor(3)
	fmt.Println(obj.InsertLast(1))
	fmt.Println(obj.InsertLast(2))
	fmt.Println(obj.InsertFront(3))
	fmt.Println(obj.InsertFront(4))
	fmt.Println(obj.GetRear())
	fmt.Println(obj.IsFull())
	fmt.Println(obj.DeleteLast())
	fmt.Println(obj.InsertFront(4))
	fmt.Println(obj.GetFront())

}
