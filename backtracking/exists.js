/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const checkExists = (word, path) => {
    const [m, n] = path[path.length - 1];
    const char = word[0];

    if (word === "") return true;

    if (
      board[m - 1] &&
      board[m - 1][n] &&
      board[m - 1][n] === char &&
      path.findIndex((p) => p[0] === m - 1 && p[1] === n) === -1
    ) {
      path.push([m - 1, n]);
      const found = checkExists(word.substr(1), path);
      if (found) return true;
      else path.pop();
    }

    if (
      board[m] &&
      board[m][n - 1] &&
      board[m][n - 1] === char &&
      path.findIndex((p) => p[0] === m && p[1] === n - 1) === -1
    ) {
      path.push([m, n - 1]);
      const found = checkExists(word.substr(1), path);
      if (found) return true;
      else path.pop();
    }
    if (
      board[m] &&
      board[m][n + 1] &&
      board[m][n + 1] === char &&
      path.findIndex((p) => p[0] === m && p[1] === n + 1) === -1
    ) {
      path.push([m, n + 1]);
      const found = checkExists(word.substr(1), path);
      if (found) return true;
      else path.pop();
    }

    if (
      board[m + 1] &&
      board[m + 1][n] &&
      board[m + 1][n] === char &&
      path.findIndex((p) => p[0] === m + 1 && p[1] === n) === -1
    ) {
      path.push([m + 1, n]);
      const found = checkExists(word.substr(1), path);
      if (found) return true;
      else path.pop();
    }

    return false;
  };
  for (let m = 0; m < board.length; m++) {
    for (let n = 0; n < board[m].length; n++) {
      if (board[m][n] === word[0]) {
        const found = checkExists(word.substr(1), [[m, n]]);
        if (found) return true;
      }
    }
  }

  return false;
};
