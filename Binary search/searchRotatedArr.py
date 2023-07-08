import math
def findTargetInRotatedArr(nums: list[int], t) -> int:
  i, e = 0, len(nums) - 1
  index = -1
  while True:
    m = math.floor((e - i) / 2) + i
    print(i, e, m)
    if t == nums[m]:
      return m
    if t == nums[i]:
      return i
    if t == nums[e]:
      return e
    if i == m:
      break
    if nums[i] < nums[m]:
      if nums[i] < t < nums[m]:
        e = m
      else:
        i = m
    else:
      if nums[i] < t or nums[m] > t:
        e = m
      else:
        i = m
  return index


nums = [4,5,6,7,0,1,2]
target = 0
nums1 = [5,1,2,3,4]
target1 = 1
nums2 = [4,5,6,7,8,1,2,3]
target2 = 8
# nums3 = [1]
# nums5 = [5,1,2,3,4]
# print(findTargetInRotatedArr(nums,target))
print(findTargetInRotatedArr(nums1,target1))
# print(findTargetInRotatedArr(nums2, target2))
# print(findMin(nums3))
# print(findMin(nums5))