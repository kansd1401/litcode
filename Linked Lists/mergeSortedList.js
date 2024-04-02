function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const removeNthFromEnd = function (list) {
  const refs = {};
  if (list.length === 0) return null;
  if (list.length === 1) return list[0];
  for (let head of list) {
    if (!head) continue;
    let current = head;
    while (current) {
      const val = current.val;
      if (refs[val]) {
        refs[val].push(current);
      } else {
        refs[val] = [current];
      }
      current = current.next ? current.next : null;
    }
  }

  const keys = Object.keys(refs);
  const head = refs[keys[0]][0];
  let current = head;

  for (let val of keys) {
    for (let node of refs[val]) {
      current.next = node;
      current = current.next;
    }
  }
  return head;
};
const node11 = new ListNode(1);
const node12 = new ListNode(4);
const node13 = new ListNode(5);

// node11.next = node12;
// node12.next = node13;

const node21 = new ListNode(1);
const node22 = new ListNode(3);
const node23 = new ListNode(4);

node21.next = node22;
node22.next = node23;

const node31 = new ListNode(2);
const node32 = new ListNode(6);

node31.next = node32;

console.log(removeNthFromEnd([null, node11]));
// let current2 = node11;
// while (current2) {
//   console.log(current2.val);
//   current2 = current2.next ? current2.next : null;
// }
