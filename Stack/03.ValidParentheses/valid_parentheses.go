package main

import "fmt"

type Stack struct {
	strs []rune
}

func (self *Stack) push(char rune) {
	self.strs = append(self.strs, char)
}

func (self *Stack) pop() {
	self.strs = self.strs[:len(self.strs)-1]
}

func (self *Stack) top() rune {
	return self.strs[len(self.strs)-1]
}

func (self *Stack) isEmpty() bool {
	return len(self.strs) == 0
}

func isValid(s string) bool {

	parenteseMap := map[rune]rune{
		'(': ')',
		'[': ']',
		'{': '}',
	}

	stack := &Stack{}
	for _, char := range s {

		if stack.isEmpty() || parenteseMap[stack.top()] != char {
			stack.push(char)
		} else {
			stack.pop()
		}
	}

	return stack.isEmpty()
}

func main() {

	fmt.Println(isValid("()"))
	fmt.Println(isValid("()[]{}"))
	fmt.Println(isValid("(]"))
	fmt.Println(isValid("{[]}"))
}
