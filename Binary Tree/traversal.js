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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const array = [];
  const traverse = (root, arr, lvl) => {
    if (!root) return;
    if (!arr[lvl]) arr.push([root.val]);
    else arr[lvl].push(root.val);

    traverse(root.left, arr, lvl + 1);
    traverse(root.right, arr, lvl + 1);
  };

  traverse(root, array, 0);

  return array;
};
