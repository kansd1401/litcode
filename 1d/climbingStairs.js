/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, cache = {}) {
  if (n <= 1) return 1;

  if (n in cache) return cache[n];

  const oneStep = climbStairs(n - 1, cache);
  const twoStep = climbStairs(n - 2, cache);

  cache[n] = oneStep + twoStep;

  return cache[n];
};
