class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reorderList(head: ListNode | null): void {
  const refs: ListNode[] = [];
  if (!head) return;
  let current: ListNode | null = head;
  while (current) {
    refs.push(current);
    current = current.next ? current.next : null;
  }
  const refsLength = refs.length;
  for (let i = 0; i < refsLength / 2; i++) {
    const n = refsLength - 1 - i;
    console.log(i, n);
    if (n === i + 1 || n === i) break;
    const temp = refs[i].next;
    refs[i].next = refs[n];
    refs[n].next = temp;
    refs[n - 1].next = null;
  }

  let current2: ListNode | null = head;
  while (current2) {
    console.log(current2);
    current2 = current2.next ? current2.next : null;
  }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

reorderList(node1);
