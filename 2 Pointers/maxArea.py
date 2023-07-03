def maxArea(height: list[int]) -> int:
  maxArea = 0
  for i,a in enumerate(height):
    for j,b in enumerate(height):
      if i == j:
        continue
      if a >= b:
        area = b*abs(i - j)
        if area > maxArea:
          maxArea = area
  return maxArea

def maxArea2(height: list[int]) -> int:
  maxArea = 0
  l,r = 0,len(height) - 1
  while l < r:
    if height[l] > height[r]:
      area = height[r] * (r - l)
      r -= 1
    else:
      area = height[l] * (r - l)
      l += 1
    if area > maxArea:
      maxArea = area
  return maxArea

height = [1,8,6,2,5,4,8,3,7]
height2 = [1,1]
# print(maxArea(height))
# print(maxArea(height2))
print(maxArea2(height))
print(maxArea2(height2))