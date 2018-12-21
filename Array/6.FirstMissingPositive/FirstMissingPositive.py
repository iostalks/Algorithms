class Solution(object):
    def firstMissingPositive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums: return 1

        length = len(nums) + 1
        for x in range(1, length):
            if x not in nums:
                return x
        return length
