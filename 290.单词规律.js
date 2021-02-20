/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let mapStr = {};
    let set = new Set();
    const patternArr = pattern.split("");
    const strArr = s.split(" ");
    if (patternArr.length !== strArr.length) return false;
    for (let i = 0; i < patternArr.length; i++) {
        const map_p = mapStr[patternArr[i]];
        if (map_p) {
            if (map_p !== strArr[i]) return false
        } else {
            if (set.has(strArr[i])) return false
        }
        mapStr[patternArr[i]] = strArr[i];
        set.add(strArr[i])
    }
    return true
};
// @lc code=end

