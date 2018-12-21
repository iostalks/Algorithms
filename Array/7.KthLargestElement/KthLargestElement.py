class Solution(object):
    def findKthLargest(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        return self._quick_select(nums, 0, len(nums) - 1, k - 1) # 注意 k-1

    def _quick_select(self, nums, left, right, k):
        pvoit = nums[right]
        origin_left, origin_right = left, right

        while left < right:
            # 左边略过比 pvoit 大的
            while nums[left] > pvoit and left < right: left += 1
            # 右边略过比 pvoit 小的
            while nums[right] <= pvoit and left < right: right -= 1
            nums[left], nums[right] = nums[right], nums[left]

        nums[left], nums[origin_right] = nums[origin_right], nums[left]
        if k == left:
            return nums[left]
        elif k > left:
            return self._quick_select(nums, left + 1, origin_right, k)
        else:
            return self._quick_select(nums, origin_left, left - 1, k)
