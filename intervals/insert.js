/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const results = [];
  for (let i = 0; i < intervals.length; i++) {
    const [newS, newE] = newInterval;
    const [currS, currE] = intervals[i];
    if (newE < currS) {
      results.push(newInterval);
      for (let j = i; j < intervals.length; j++) {
        results.push(intervals[j]);
      }
      return results;
    } else if (newS > currE) {
      results.push(intervals[i]);
    } else {
      newInterval = [Math.min(currS, newS), Math.max(currE, newE)];
    }
  }

  results.push(newInterval);

  return results;
};
