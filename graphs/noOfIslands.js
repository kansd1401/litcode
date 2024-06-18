/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const rLen = grid.length;
  const cLen = grid[0].length;

  const dfs = (m, n) => {
    if (
      m < 0 ||
      m === rLen ||
      n < 0 ||
      n === cLen ||
      grid[m][n] === "0" ||
      grid[m][n] === "#"
    )
      return;

    grid[m][n] = "#";

    dfs(m + 1, n);
    dfs(m, n - 1);
    dfs(m, n + 1);
    dfs(m - 1, n);
    return;
  };

  let islands = 0;

  for (let m = 0; m < rLen; m++) {
    for (let n = 0; n < cLen; n++) {
      if (grid[m][n] === "1") {
        islands++;
        dfs(m, n);
      }
    }
  }

  return islands;
};
