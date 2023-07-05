def isValid( s: str) -> bool:
  par = {"(": ")","[": "]","{": "}"}
  i = 0
  openB = []
  while i < len(s):
    ch = s[i]
    if ch in par:
      openB.insert(0, par[ch])
    elif len(openB) > 0 and openB[0] == ch:
      openB.pop(0)
    else:
      return False
    i+=1
  return len(openB) == 0
s = "()"
s1 = "()[]{}"
s2 = "(]"
s3 = "{[]}"
# s4 = "([)]"
s4 = "]"
print(isValid(s))
print(isValid(s1))
print(isValid(s2))
print(isValid(s3))
print(isValid(s4))