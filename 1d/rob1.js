/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const robCal = (nums, i, cache = {}) => {
    if (i >= nums.length) return 0;
    if (i in cache) return cache[i];
    let moneyA = nums[i];
    let moneyB = nums[i];
    if (i + 2 < nums.length) {
      moneyA += robCal(nums, i + 2, cache);
    }
    if (i + 3 < nums.length) {
      moneyB += robCal(nums, i + 3, cache);
    }
    cache[i] = Math.max(moneyA, moneyB);
    return cache[i];
  };

  return Math.max(robCal(nums, 0), robCal(nums, 1));
};
