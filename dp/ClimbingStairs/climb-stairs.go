package main

import "fmt"

func climbStairs(n int) int {
	if n == 1 {
		return 1
	}

	if n == 2 {
		return 2
	}

	//dp init stte
	count := make([]int, n+1)
	count[1] = 1
	count[2] = 2

	//dp stte transfer
	for i := 3; i < len(count); i++ {
		count[i] = count[i-1] + count[i-2]
	}

	return count[n]
}

func main() {
	fmt.Println(climbStairs(2))
	fmt.Println(climbStairs(3))
}
