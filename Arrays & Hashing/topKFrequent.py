
def topKFrequent(nums: list[int], k: int) -> list[int]:
  numHash = {}
  for n in nums:
    if n in numHash:
      numHash[n] = numHash[n] + 1
    else:
      numHash.update({n : 1})

  arr = []
  for key in numHash:
    obj = {
      "num": key,
      "reps": numHash[key]
    }
    arr.append(obj)
  arr.sort(key=lambda obj: obj['reps'],reverse=True)

  ks = []
  for i in range(0,k):
    ks.append(arr[i]['num'])
  return ks

nums = [1,1,1,2,2,3]
k = 2
nums2 = [1]
k2 = 1

print(topKFrequent(nums, k))
print(topKFrequent(nums2,k2))