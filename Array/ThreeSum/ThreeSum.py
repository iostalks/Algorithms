# O(n * n)
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        res = []
        nums.sort()
        nums_len = len(nums)
        # 去除例外，包括：小于三个元素的list，最小值大于0的，最大值小于0的
        if nums_len < 3:
            return []
        if nums[0] > 0:
            return []
        if nums[-1] < 0:
            return []

        for i in range(0, nums_len - 2):
            # 如果当前值大于0的话，跳出for循环，因为剩下的两个数肯定大于等于当前数
            if nums[i] > 0:
                break
            # 如果前三个数相加大于0的话则跳出for循环，因为接下来的任何三个数相加都会超过0
            if 0 < nums[i] + nums[i+1] + nums[i+2]:
                break
            # 如果当前数加上最大的两个数还小于0的话则说明当前数太小，不可能找到符合要求的组合，则跳过当前数。
            if 0 > nums[i] + nums[-1] + nums[-2]:
                continue
            # 如果与前一个值相同，则跳过
            # 避免重复计算
            if i > 0 and nums[i] == nums[i-1]:
                continue
            l, r = i + 1, nums_len - 1
            while l < r:
                s = nums[i] + nums[l] + nums[r]
                if s < 0:
                    # 和过小，增大 nums[l]
                    l += 1
                elif s > 0:
                    # 值过大，减小 nums[r]
                    r -= 1
                else:
                    # 存储目标结果
                    res.append((nums[i], nums[l], nums[r]))
                    # 避免 l,r 重复计算
                    while l < r and nums[l] == nums[l + 1]:
                        l += 1
                    while l < r and nums[r] == nums[r - 1]:
                        r -= 1
                    # 下一组目标值
                    l += 1
                    r -= 1
        return res
