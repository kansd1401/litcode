def mergeTwoLists(list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
    if not list1:
      return list2
    if not list2:
      return list1
    newHead, curr1, curr2 = ListNode(), list1, list2
    prev = None
    while curr1 or curr2:
      if not prev:
        prev = newHead
      else:
        prev.next = ListNode()
        prev = prev.next
      if not curr1:
        prev.val = curr2.val
        curr2 = curr2.next
      elif not curr2 or curr1.val < curr2.val:
        prev.val = curr1.val
        curr1 = curr1.next
      else:
        prev.val = curr2.val
        curr2 = curr2.next
    return newHead