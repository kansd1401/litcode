 def reorderList(self, head: Optional[ListNode]) -> None:
        nodesHash = {}
        n = 0
        curr = head
        while curr:
          nodesHash[n] = curr
          n+=1
          curr = curr.next
        n-=1
        i = 0
        limit =  n//2
        while i < limit:
          nodesHash[i].next = nodesHash[n - i]
          nodesHash[n - i].next = nodesHash[i + 1]
          nodesHash[n - i - 1].next = None
          i+=1


        
        return None