/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    s = s.split("");
    var i = 0, j = s.length - 1;
    const vowels = "aeiou";
    while (i < j) {
        if (vowels.indexOf(s[i].toLowerCase()) > -1) {
            do {
                if (vowels.indexOf(s[j].toLocaleLowerCase()) > -1) {
                    let temp = s[i];
                    s[i] = s[j];
                    s[j] = temp;
                    j--;
                    break;
                } else {
                    j--;
                }
            } while (j > i)
        };
        i++;
    };
    return s.join("")
};
// @lc code=end

