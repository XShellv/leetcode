/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let arr = new Array(n).fill(true);
    for (let i = 2; i * i < n; i++) {
        if (arr[i]) {
            for (let j = i * i; j < n; j += i) {
                arr[j] = false
            }
        }
    }
    for (var i = 2, cnt = 0; i < arr.length; i++) arr[i] && cnt++;
    return cnt
};
var countPrimes = function (n) {
    for(var i = 2, r = 0; i < n; i++) isPrime(i) && r++
    return r
    function isPrime(n) {
        for (var i = 2, max = Math.sqrt(n); i <= max; i++)
            if (n % i === 0) return false
        return true
    }
};
// @lc code=end

