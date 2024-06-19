/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const gridCache = new Array(m).fill(0).map(() => Array(n).fill(0));
  const dfs = (r, c) => {
    if (r < 0 || r === m || c < 0 || c === n) return 0;
    if (r === m - 1 && c === n - 1) return 1;

    if (gridCache[r][c]) return gridCache[r][c];

    gridCache[r][c] = dfs(r + 1, c) + dfs(r, c + 1);

    return gridCache[r][c];
  };

  return dfs(0, 0);
};
