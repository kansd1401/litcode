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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if ((!root && subRoot) || (root && !subRoot)) return false;
  if (root === null && subRoot === null) return true;
  const isEqual = (root, subRoot) => {
    if ((!root && subRoot) || (root && !subRoot)) return false;
    if (root === null && subRoot === null) return true;
    if (root.val === subRoot.val) {
      const matchLeft = isEqual(root.left, subRoot.left);
      const matchRight = isEqual(root.right, subRoot.right);

      return matchLeft && matchRight;
    }
  };

  if (root.val === subRoot.val) {
    const isMatch = isEqual(root, subRoot);
    if (isMatch) return true;
  }

  const matchLeft = isSubtree(root.left, subRoot);
  const matchRight = isSubtree(root.right, subRoot);
  return matchLeft || matchRight;
};
