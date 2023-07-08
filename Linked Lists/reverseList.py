def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:
  prev, curr = None, head
  while curr:
    tempCurr = curr.next
    curr.next = prev
    prev = curr
    curr = tempCurr
  return prev
