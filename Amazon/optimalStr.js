/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  let hash = {};
  let counter = 1;
  for (const ch of s) {
    if (!hash[ch]) {
      hash[ch] = true;
    } else {
      hash = { [ch]: true };
      counter++;
    }
  }
  return counter;
};

console.log(partitionString("abacaba"));
console.log(partitionString("ssssss"));
