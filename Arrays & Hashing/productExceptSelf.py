def productExceptSelf(arr: list[int]) -> list[int]:
  length = len(arr)
  answer = [0] * length
  pre = [0] * length
  post = [0] * length
  maxInd = length - 1
  for i,n in enumerate(arr):
    if(maxInd < len(arr) - 1):
      post[maxInd] = arr[maxInd] * post[maxInd+1]
    else:
      post[maxInd] = arr[maxInd]
    if(i > 0):
      pre[i] = pre[i-1] * arr[i]
    else:
      pre[i] = arr[i]
    maxInd = maxInd - 1
  for i,n in enumerate(arr):
    if i > 0 and i < len(arr) - 1:
      answer[i] = pre[i - 1] * post[i + 1]
    elif i == 0:
      answer[i] = post[i+1]
    elif i == len(arr) - 1:
      answer[i] = pre[i-1]

  return answer

nums = [1,2,3,4]
nums2 = [-1,1,0,-3,3]
print(productExceptSelf(nums))
print(productExceptSelf(nums2))