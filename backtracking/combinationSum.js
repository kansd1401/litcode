/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const data = {};
  candidates.sort((a, b) => a - b);
  const list = [];
  const finder = (candidates, target, path = []) => {
    for (const n of candidates) {
      if (n > target) {
        break;
      }
      path.push(n);
      if (n === target) {
        const sorted = path.map((e) => e).sort((a, b) => a - b);
        const str = sorted.join(",");
        if (!(str in data)) {
          data[str] = true;
          list.push(sorted);
        }
      }
      finder(candidates, target - n, path);
      path.pop();
    }
  };

  finder(candidates, target);

  return list;
};
