def characterReplacement(s: str, k: int) -> int:
  maxLength = 0
  l, r = 0, 0
  strLem = len(s)
  while r < strLem:
    turns = k
    while r < strLem:
      if s[l] != s[r]:
        if turns > 0:
          turns -= 1
        else:
          break
      r+=1
    maxLength = max(maxLength, r - l)
    l+=1
    r=l
  return maxLength

def characterReplacement2(s: str, k: int) -> int:
  count = {}
        
  l = 0
  maxf = 0
  for r in range(len(s)):
    count[s[r]] = 1 + count.get(s[r], 0)
    maxf = max(maxf, count[s[r]])

    if (r - l + 1) - maxf > k:
      count[s[l]] -= 1
      l += 1
  return (r - l + 1)

s = "ABAB"

k = 2
s1 = "AABABBA"
k1 = 1
s2 ="ABBB"
k2 = 2
s3 ="AAAA"
k3=0
# print(characterReplacement(s,k))
# print(characterReplacement(s1,k1))
# print(characterReplacement(s2,k2))
# print(characterReplacement(s3,k3))
print(characterReplacement2(s,k))
print(characterReplacement2(s1,k1))
print(characterReplacement2(s2,k2))
print(characterReplacement2(s3,k3))