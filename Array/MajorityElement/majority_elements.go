package array

func majorityElement(nums []int) int {
	if len(nums) == 0 {
		panic("no majority found because nums is empty")
	}

	//count
	countMap := make(map[int]int)
	for _, num := range nums {
		countMap[num]++

		if countMap[num] > len(nums)/2 {
			return num
		}
	}

	panic("no majority element found")
}
