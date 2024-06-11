/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k, count = { k: 0 }) {
  if (!root) return -1;
  const left = kthSmallest(root.left, k, count);
  if (left !== -1) return left;
  if (++count.k === k) return root.val;
  return kthSmallest(root.right, k, count);
};
