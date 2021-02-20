/*
 * @lc app=leetcode.cn id=1103 lang=javascript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    let arr = new Array(num_people).fill(0);
    let sum = 0;
    let index = 0;
    let i = 1;
    while (sum < candies) {
        // 剩余不足时
        if (sum + i > candies) {
            i = candies - sum
        }
        arr[index] += i;
        sum += i;
        ++i;
        ++index;
        // 下标越界重置
        if (index > num_people - 1) {
            index = 0;
        }
    }
    return arr
};
// @lc code=end

