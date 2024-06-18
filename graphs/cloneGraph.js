/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  const hash = {};

  const dfs = (node) => {
    if (!node) return null;
    if (!(node.val in hash)) {
      hash[node.val] = new _Node(node.val);
    } else {
      return hash[node.val];
    }

    if (node.neighbors.length !== hash[node.val].neighbors.length) {
      hash[node.val].neighbors = node.neighbors.map((n) => dfs(n));
    }

    return hash[node.val];
  };

  return dfs(node);
};
