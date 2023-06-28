def longestConsecutive(nums: list[int]) -> int:
  setNums = set(nums)
  longest = 0
  for n in nums:
      length = 0
      if (n - 1) not in setNums:
          while (n + length) in setNums:
              length += 1
          if longest < length:
              longest = max(length, longest)



  return longest

nums = [100,4,200,1,3,2]
nums2 = [0,3,7,2,5,8,4,6,0,1]
print(longestConsecutive(nums))

print(longestConsecutive(nums2))