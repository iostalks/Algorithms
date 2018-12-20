class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        numberIndexDict = {}
        for i, x in enumerate(nums):
            y = target - x
            if y in numberIndexDict:
                return [numberIndexDict[y], i]
            numberIndexDict[x] = i
