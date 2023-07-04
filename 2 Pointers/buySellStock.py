def maxProfit(prices: list[int]) -> int:
  l, leastL, r, maxR = 0, 0, len(prices) - 1, len(prices) - 1
  while l < r:
    if prices[l] < prices[leastL]:
        leastL = l
    if prices[r] > prices[maxR]:
      maxR = r
    if prices[l] > prices[r]:
      l+=1
    else:
      r-=1
    if l == r:
      if prices[maxR] - prices[l] > prices[r] - prices[leastL]:
        leastL = l
      else:
        maxR = r
  print(leastL, maxR)
  if prices[leastL] >  prices[maxR]:
    return 0
  else:
    return  prices[maxR] -  prices[leastL]

def maxProfit2(prices: list[int]) -> int:
  maxProfit = 0
  l, r = 0, 1
  while r < len(prices):
    maxProfit = max(maxProfit, prices[r] - prices[l])
    if prices[l] > prices[r]:
      l = r
      r+=1
    else:
      r+=1
  return maxProfit

prices = [7,1,5,3,6,4]
prices2 = [7,6,4,3,1]
prices3 = [2,1,2,1,0,0,1]
prices4 = [2,4,1]
prices5 = [2,1,4]
print(maxProfit2(prices))
print(maxProfit2(prices2))
print(maxProfit2(prices3))
print(maxProfit2(prices4))
print(maxProfit2(prices5))