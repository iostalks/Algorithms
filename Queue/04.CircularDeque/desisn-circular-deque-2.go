package main

import "fmt"

type MyCircularDeque struct {
	nums  []int
	count int
	head  int
	tail  int
}

/** Initialize your data structure here. Set the size of the deque to be k. */
func Constructor(k int) MyCircularDeque {
	nums := make([]int, k)
	return MyCircularDeque{nums: nums}
}

/** Adds an item at the front of Deque. Return true if the operation is successful. */
func (this *MyCircularDeque) InsertFront(value int) bool {
	if this.IsFull() {
		return false
	}

	index := this.head - 1
	if index < 0 {
		index = len(this.nums) - 1
	}
	this.nums[index] = value
	this.head = index
	this.count++
	return true
}

/** Adds an item at the rear of Deque. Return true if the operation is successful. */
func (this *MyCircularDeque) InsertLast(value int) bool {
	if this.IsFull() {
		return false
	}

	this.nums[this.tail] = value
	this.tail = (this.tail + 1) % len(this.nums)
	this.count++
	return true
}

/** Deletes an item from the front of Deque. Return true if the operation is successful. */
func (this *MyCircularDeque) DeleteFront() bool {
	if this.IsEmpty() {
		return false
	}

	this.head = (this.head + 1) % len(this.nums)
	this.count--
	return true
}

/** Deletes an item from the rear of Deque. Return true if the operation is successful. */
func (this *MyCircularDeque) DeleteLast() bool {
	if this.IsEmpty() {
		return false
	}

	this.tail = this.tail - 1
	if this.tail < 0 {
		this.tail = len(this.nums) - 1
	}
	this.count--
	return true
}

/** Get the front item from the deque. */
func (this *MyCircularDeque) GetFront() int {
	if this.IsEmpty() {
		return -1
	}

	return this.nums[this.head]
}

/** Get the last item from the deque. */
func (this *MyCircularDeque) GetRear() int {
	if this.IsEmpty() {
		return -1
	}

	index := this.tail - 1
	if index < 0 {
		index = len(this.nums) - 1
	}
	return this.nums[index]
}

/** Checks whether the circular deque is empty or not. */
func (this *MyCircularDeque) IsEmpty() bool {
	return this.count == 0
}

/** Checks whether the circular deque is full or not. */
func (this *MyCircularDeque) IsFull() bool {
	return this.count == len(this.nums)
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
