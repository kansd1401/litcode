def lengthOfLongestSubstring(s: str) -> int:
  maxLen = 0
  strLen = len(s)
  for i,ch in enumerate(s):
    length = 1
    strSet = set(ch)
    while i + length < strLen:
      if s[i + length] in strSet:
        break
      else:
        strSet.add(s[i+length])
        length+=1
    maxLen = max(maxLen, length)
  return maxLen
s = "abcabcbb"
s2 = "bbbbb"
s3 = "pwwkew"
print(lengthOfLongestSubstring(s))
print(lengthOfLongestSubstring(s2))
print(lengthOfLongestSubstring(s3))