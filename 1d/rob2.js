/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const robCal = (nums, i, cacheIni, cacheSe, iniHouse) => {
    if (i >= nums.length) return 0;
    const cache = iniHouse ? cacheIni : cacheSe;
    if (iniHouse && i === nums.length - 1 && i !== 0)
      return nums[i] > nums[0] ? nums[i] - nums[0] : 0;
    if (i in cache) return cache[i];

    let moneyA = nums[i];
    let moneyB = nums[i];
    if (i + 2 < nums.length) {
      moneyA += robCal(nums, i + 2, cacheIni, cacheSe, iniHouse);
    }
    if (i + 3 < nums.length) {
      moneyB += robCal(nums, i + 3, cacheIni, cacheSe, iniHouse);
    }
    cache[i] = Math.max(moneyA, moneyB);
    return cache[i];
  };

  return Math.max(
    robCal(nums, 0, {}, {}, true),
    robCal(nums, 1, {}, {}, false)
  );
};
