/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    const orderArr = arr.sort((a, b) => a - b);
    let minAbs, minArr;
    for (let i = 0; i < orderArr.length - 1; i++) {
        let j = i + 1;
        const abs = Math.abs(orderArr[j] - orderArr[i]);
        if (i === 0) {
            minAbs = abs;
            minArr = [[orderArr[i], orderArr[j]]]
        } else {
            if (abs === minAbs) {
                minArr.push([orderArr[i], orderArr[j]])
            } else if (abs < minAbs) {
                minAbs = abs;
                minArr = [[orderArr[i], orderArr[j]]]
            }
        }

    }
    return minArr
};
// @lc code=end

