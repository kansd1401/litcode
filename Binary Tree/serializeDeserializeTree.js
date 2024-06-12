/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return "N";

  let strLeft = serialize(root.left);
  let strRight = serialize(root.right);

  return root.val.toString() + "," + strLeft + "," + strRight;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return data;
  const arr = data.split(",");
  let k = 0;
  const dfs = (arr) => {
    if (arr[k] === "N") {
      k++;
      return null;
    }
    const newNode = new TreeNode(arr[k]);
    k++;
    newNode.left = dfs(arr);
    newNode.right = dfs(arr);

    return newNode;
  };

  return dfs(arr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
