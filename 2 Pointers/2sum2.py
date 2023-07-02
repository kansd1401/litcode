def twoSum(numbers: list[int], target: int) -> list[int]:
  numKeys = {}
  for i,n in enumerate(numbers):
    if target - n in numKeys:
      return [numKeys[target - n] +1,i + 1]
    else:
      numKeys[n] = i
  return
numbers = [2,7,11,15]
target = 9
numbers2 = [2,3,4]
target2 = 6
numbers3 = [-1,0]
target3 = -1

print(twoSum(numbers, target))
print(twoSum(numbers2, target2))
print(twoSum(numbers3, target3))