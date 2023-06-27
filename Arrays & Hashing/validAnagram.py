def isAnagram( s: str, t: str) -> bool:
  emptyDicts = {}
  emptyDictt = {}
  if len(s) != len(t):
    return False
  for i in range(0,len(t)):
    sChar = s[i]
    tChar = t[i]
    if sChar in emptyDicts:
      emptyDicts.update({sChar: emptyDicts[sChar] + 1})
    else:
      emptyDicts.update({sChar: 1})
    if tChar in emptyDictt:
      emptyDictt.update({tChar: emptyDictt[tChar] + 1})
    else:
      emptyDictt.update({tChar: 1})

  chars = emptyDicts.keys()
  for char in chars:
    if not char in emptyDicts or not char in emptyDictt:
      return False
    if emptyDicts[char] != emptyDictt[char]:
      return False
  
  return True

s = "anagram"
t = "nagaram"
s2 = "rat"
t2 = "car"

print(isAnagram(s, t))
print(isAnagram(s2,t2))