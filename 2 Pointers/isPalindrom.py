def isPalindrome(s: str) -> bool:
  lowS = s.lower()
  cleanStr = ''.join(ch for ch in lowS if ch.isalpha())
  lengthStr = len(cleanStr)
  for i in range(lengthStr):
    if cleanStr[i] != cleanStr[lengthStr - 1 - i]:
      return False
    if i > lengthStr/2:
      break
  return True

s = "A man, a plan, a canal: Panama"
s2 = "race a car"
s3 = " "
print(isPalindrome(s))
print(isPalindrome(s2))
print(isPalindrome(s3))