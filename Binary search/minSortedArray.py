import math
def findMin(nums: list[int]) -> int:
  i, end = 0, len(nums) - 1
  minNum = nums[i]
  while True:
    l = math.floor((end - i) / 2) + i
    minNum = min(minNum,nums[i],nums[end],nums[l])
    if i == l:
      break
    if nums[i] < nums[l]:
      i = l
    else:
      end = l
  return minNum


nums = [3,4,5,1,2]
nums1 = [4,5,6,7,0,1,2]
nums2 = [11,13,15,17]
nums3 = [1]
nums5 = [5,1,2,3,4]
print(findMin(nums))
print(findMin(nums1))
print(findMin(nums2))
print(findMin(nums3))
print(findMin(nums5))