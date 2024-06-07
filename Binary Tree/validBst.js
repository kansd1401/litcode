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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const validator = (root, leftArr, rightArr) => {
    if (!root) return true;
    for (const lPar of leftArr) {
      if (lPar <= root.val) return false;
    }
    for (const rPar of rightArr) {
      if (rPar >= root.val) return false;
    }

    if (root.left && root.left.val > root.val) return false;
    if (root.right && root.right.val < root.val) return false;

    const left = validator(root.left, [...leftArr, root.val], rightArr);
    if (!left) return false;
    const right = validator(root.right, leftArr, [...rightArr, root.val]);
    if (!right) return false;

    return true;
  };

  return validator(root, [], []);
};
