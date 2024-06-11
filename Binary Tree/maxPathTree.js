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
var maxPathSum = function (root) {
  const res = [root.val];

  var getRootSum = (root) => {
    if (!root) return 0;

    let sumLeft = getRootSum(root.left);
    let sumRight = getRootSum(root.right);

    sumLeft = Math.max(sumLeft, 0);
    sumRight = Math.max(sumRight, 0);

    res[0] = Math.max(res[0], root.val + sumLeft + sumRight);
    return Math.max(root.val + sumLeft, root.val + sumRight);
  };
  const val = getRootSum(root);

  return res[0];
};
