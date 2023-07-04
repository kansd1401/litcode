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
  maxLength = 0
  strArr = list(s)
  strLem = len(strArr)
  i = 0
  while i + 1 < strLem:
    turns = k
    l,r = i,i+1
    while True:
      if strArr[l] != strArr[r]:
        if turns == 0:
          break
        turns -= 1
      if r + 1 < strLem:
        if turns == 0 and strArr[l] != strArr[r+1]:
          break
        r+=1
      elif l - 1 >= 0:
        if turns == 0 and strArr[l-1] != strArr[r]:
          break
        l-=1
      else:
        break
    print(i, l , r)
    maxLength = max(maxLength, r - l + 1)
    i+=1
  return maxLength

s = "ABAB"

k = 2
s1 = "AABABBA"
k1 = 1
s2 ="ABBB"
k2 = 2
s3 ="AAAA"
k3=0
print(characterReplacement(s,k))
print(characterReplacement(s1,k1))
print(characterReplacement(s2,k2))
print(characterReplacement(s3,k3))
# print(characterReplacement2(s,k))
# print(characterReplacement2(s1,k1))
# print(characterReplacement2(s2,k2))
# print(characterReplacement2(s3,k3))