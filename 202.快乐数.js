/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    /**
     * 数学法
     */
    let arr = [4, 16, 37, 58, 89, 145, 42, 20];
    function getEachNum(n) {
        let numArr = [];
        while (n > 0) {
            numArr.push(n % 10);
            n = parseInt(n / 10);
        }
        const sum = numArr.reduce((prev, curr) => {
            return prev + Math.pow(curr, 2)
        }, 0);
        if (arr.includes(sum)) {
            return false
        } else if (sum === 1) {
            return true
        } else {
            return getEachNum(sum)
        }
    };
    return getEachNum(n)
};
// @lc code=end

