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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  let depthLeft = 0;
  let depthRight = 0;
  if (root.left) {
    depthLeft = maxDepth(root.left);
  }
  if (root.right) {
    depthRight = maxDepth(root.right);
  }

  return (depthLeft >= depthRight ? depthLeft : depthRight) + 1;
};
