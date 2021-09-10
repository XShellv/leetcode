/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
    const uglys = [2, 3, 5];
    if (num === 0) return false;
    if (num === 1) return true;
    do {
        for (var i = 0; i < uglys.length; i++) {
            if (num % uglys[i] === 0) {
                num = num / uglys[i];
                break;
            }
        }
        if (num === 1) {
            return true;
        }
        if (i === uglys.length) {
            return false;
        }
    } while (num !== 1)
};
// @lc code=end

