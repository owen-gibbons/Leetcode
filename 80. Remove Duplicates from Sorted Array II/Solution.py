class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        newArr = nums
        seen = 1
        k = 1
        for i in range(1, len(nums)):
            if seen < 2 and nums[i-1] == nums[i]:
                newArr[k] = nums[i]
                k += 1
                seen += 1
            elif nums[i-1] != nums[i]:
                newArr[k] = nums[i]
                k += 1
                seen = 1
        for i in range(0,k):
            nums[i] = newArr[i]
        return k