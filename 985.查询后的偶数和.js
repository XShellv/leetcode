/*
 * @lc app=leetcode.cn id=985 lang=javascript
 *
 * [985] 查询后的偶数和
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
    var sum = A.reduce(function (prev, cur) {
        if (cur % 2 === 0) {
            return prev + cur
        };
        return prev;
    }, 0);
    let target = []
    for (let i = 0; i < queries.length; i++) {
        const index = queries[i][1];
        const num = queries[i][0];
        if (A[index] % 2 === 0) {
            if ((A[index] + num) % 2 === 0) {
                target.push(sum += num);
            } else {
                target.push(sum -= A[index]);
            }
            A[index] = A[index] + num;
        } else if ((Math.abs(A[index]) % 2) === 1) {
            if ((A[index] + num) % 2 === 0) {
                A[index] = A[index] + num;
                target.push(sum += A[index])
            } else {
                A[index] = A[index] + num;
                target.push(sum)
            }
        }
    }
    return target
};
// @lc code=end

