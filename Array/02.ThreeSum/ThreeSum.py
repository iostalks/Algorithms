# O(n * n)
class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        res = []
        nums.sort() # 排序
        for i in xrange(0, len(nums) - 2):
            # 如果与前一个值相同，则跳过
            # 避免重复计算
            if i > 0 and nums[i] == nums[i-1]:
                continue
            l, r = i + 1, len(nums) - 1
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
