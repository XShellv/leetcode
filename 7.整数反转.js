/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const xStr = x.toString();
    const xReverseStr = xStr.split("").reverse().join("");
    if (xReverseStr[xReverseStr.length - 1] === "-") {
        const ret = -1 * xReverseStr.slice(0, xReverseStr.length - 1);
        return ret < Math.pow(-2, 31) ? 0 : ret
    } else {
        const ret = 1 * xReverseStr.slice(0, xReverseStr.length);
        return ret > Math.pow(2, 31) - 1 ? 0 : ret
    }
};
// @lc code=end

