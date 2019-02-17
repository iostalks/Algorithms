package main

import "fmt"
import "strconv"

type Stack struct {
	nums []int
}

func (self *Stack) push(num int) {
	self.nums = append(self.nums, num)
}

func (self *Stack) pop() int {
	top := self.nums[len(self.nums)-1]
	self.nums = self.nums[:len(self.nums)-1]
	return top
}

func evalRPN(tokens []string) int {

	if len(tokens) == 0 {
		panic("no num, no operations")
	}

	operations := map[string]bool{
		"+": true,
		"-": true,
		"*": true,
		"/": true,
	}

	//handle one num case
	if len(tokens) == 1 && operations[tokens[0]] == false {
		result, err := strconv.Atoi(tokens[0])
		if err == nil {
			return result
		}
	}

	stack := &Stack{}
	result := 0
	for _, token := range tokens {
		if operations[token] {
			result = calculate(token, stack.pop(), stack.pop())
			stack.push(result)
		} else {
			num, err := strconv.Atoi(token)
			if err == nil {
				stack.push(num)
			}
		}
	}

	return result
}

func calculate(operation string, a int, b int) int {
	switch operation {
	case "+":
		return b + a
	case "-":
		return b - a
	case "*":
		return b * a
	case "/":
		return b / a
	}

	panic("illegal oprator")
}

func main() {
	fmt.Println(evalRPN([]string{"18"}))
	fmt.Println(evalRPN([]string{"2", "1", "+", "3", "*"}))
	fmt.Println(evalRPN([]string{"4", "13", "5", "/", "+"}))
	fmt.Println(evalRPN([]string{"10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"}))
}
