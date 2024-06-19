/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const res = [];
  intervals.sort((a, b) => a[0] - b[0]);
  for (const interval of intervals) {
    if (res.length === 0) {
      res.push(interval);
      continue;
    }
    const prev = res[res.length - 1];

    if (interval[0] >= prev[0] && interval[0] <= prev[1]) {
      res[res.length - 1] = [
        Math.min(interval[0], prev[0]),
        Math.max(interval[1], prev[1]),
      ];
    } else {
      res.push(interval);
    }
  }

  return res;
};
