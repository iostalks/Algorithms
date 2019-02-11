package main

import "fmt"

func threeSum(nums []int) [][]int {
	if len(nums) < 3 {
		return nil
	}
	//quick sort
	quickSort(nums, 0, len(nums)-1)

	var result [][]int
	//3 sum ->  2 sum
	for i := 0; i < len(nums)-2; i++ {
		//avoid duplicate cal
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}

		//find 2 sum
		twoSum := 0 - nums[i]
		start := i + 1
		end := len(nums) - 1

		//head-tail pointers
		for start < end {

			//avoid duplicate
			if start > i+1 && nums[start] == nums[start-1] {
				start++
				continue
			}

			if end < len(nums)-1 && nums[end] == nums[end+1] {
				end--
				continue
			}

			sum := nums[start] + nums[end]

			if sum == twoSum {
				result = append(result, []int{nums[i], nums[start], nums[end]})
				start++
				end--
			} else if sum > twoSum {
				end--
			} else {
				start++
			}

		}
	}

	return result
}

func quickSort(nums []int, start int, end int) {

	if start >= end {
		return
	}

	q := partion(nums, start, end)
	quickSort(nums, start, q-1)
	quickSort(nums, q+1, end)
}

func partion(nums []int, start int, end int) int {
	pivot := nums[end]
	middle := start
	for i := start; i < end; i++ {
		if nums[i] < pivot {
			nums[i], nums[middle] = nums[middle], nums[i]
			middle++
		}
	}

	nums[middle], nums[end] = nums[end], nums[middle]

	return middle
}

func main() {

	fmt.Println(threeSum([]int{-1, 0, 1, 2, -1, -4}))
}
