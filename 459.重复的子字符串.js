/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    for (let i = 1; i < s.length; i++) {
        let mStr = s.slice(0, i);
        for (var j = i; j < s.length; j = j + i) {
            if (s.slice(j, j + i) !== mStr) {
                break;
            }
        }
        if (j > s.length - 1) {
            return true
        }
    }
    return false
};
// @lc code=end

