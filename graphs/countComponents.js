/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

class GraphNode {
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
    this.counted = false;
  }
}

var countComponents = function (n, edges) {
  const hash = {};

  for (const [a, b] of edges) {
    if (!(a in hash)) hash[a] = new GraphNode(a);
    if (!(b in hash)) hash[b] = new GraphNode(b);

    hash[a].neighbors.push(hash[b]);
    hash[b].neighbors.push(hash[a]);
  }

  const nodeVals = Object.keys(hash);
  let output = 0;

  const dfs = (node) => {
    if (!node || node.counted) return;

    node.counted = true;

    node.neighbors.forEach((n) => dfs(n));
  };
  for (const val of nodeVals) {
    if (hash[val].counted) {
      continue;
    }
    output++;
    dfs(hash[val]);
  }

  return output + n - nodeVals.length;
};
