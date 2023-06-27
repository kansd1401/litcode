def containsDuplicate(nums: list[int]) -> bool:
  emptyDict = set()
  for x in nums:
    if x in emptyDict:
      return True
    emptyDict.add(x)
  return False

nums = [1,2,3,1]
nums2 = [1,2,3,4]
nums3 = [1,1,1,3,3,4,3,2,4,2]
print(containsDuplicate(nums))
print(containsDuplicate(nums2))
print(containsDuplicate(nums3))