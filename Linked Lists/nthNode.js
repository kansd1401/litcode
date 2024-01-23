function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const removeNthFromEnd = function (head, n) {
  const refs = [];
  if (!head) return null;
  let current = head;
  while (current) {
    refs.push(current);
    current = current.next ? current.next : null;
  }
  const length = refs.length;

  const next = refs[length - n + 1] ? refs[length - n + 1] : null;

  if (length - n === 0) {
    refs[length - n].next === null;
    return next;
  }
  refs[length - n - 1].next = next;

  return head;
};

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(removeNthFromEnd(node1, 2));
let current2 = node1;
while (current2) {
  console.log(current2);
  current2 = current2.next ? current2.next : null;
}
