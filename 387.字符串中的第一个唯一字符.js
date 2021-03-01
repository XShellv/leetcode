/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let temp = {};
  var s = s.split("");
  for (var left = 0; left < s.length; left++) {
    if (temp[s[left]]) {
      continue;
    } else {
      temp[s[left]] = 1;
      var right = s.length - 1;
      do {
        if (left === right) {
          return left;
        }
        if (s[left] === s[right]) {
          break;
        } else {
          right--;
        }
      } while (left <= right);
    }
  }
  if (left >= s.length - 1) return -1;
  return 0;
};
firstUniqChar("aadadaad");
// @lc code=end
