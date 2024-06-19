/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let [left, right, sum, maxSum] = [0, 1, nums[0], nums[0]];

  while (right < nums.length) {
    if (sum + nums[right] <= nums[right]) {
      left = right;
      sum = 0;
    }

    sum += nums[right];
    if (maxSum === null) maxSum = sum;
    maxSum = Math.max(sum, maxSum);
    right++;
  }
  return maxSum;
};
