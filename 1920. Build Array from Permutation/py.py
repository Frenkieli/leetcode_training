class Solution:
  def buildArray(self, nums: list[int]) -> list[int]:
    lst = [nums[i] for i in nums]
    return lst
    # arr = [];
    # for i in range(len(nums)):
    #   arr.append(nums[nums[i]]);
    # return arr;

print(Solution.buildArray(Solution, [0, 2, 1, 5, 3, 4]));