/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let temp = {};
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        // 存在则比较是否相等
        if (temp[s[i]]) {
            if (temp[s[i]] !== t[i]) {
                return false
            }
        }else{
            // 不存在则比较集合是否存在
            if(set.has(t[i])){
                return false
            }
        }
        temp[s[i]] = t[i];
        set.add(t[i])
    }
    return true
};
// @lc code=end

