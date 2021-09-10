/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  debugger;
  let maxArr = new Array(3).fill(-Infinity);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxArr[0]) {
      maxArr[2] = maxArr[1];
      maxArr[1] = maxArr[0];
      maxArr[0] = nums[i];
    } else if (nums[i] > maxArr[1] && nums[i] !== maxArr[0]) {
      maxArr[2] = maxArr[1];
      maxArr[1] = nums[i];
    } else if (nums[i] > maxArr[2] && nums[i] !== maxArr[1]) {
      maxArr[2] = nums[i];
    }
  }
  console.log(maxArr);
  if (!isFinite(maxArr[2])) {
    return maxArr[0];
  }
  return maxArr[2];
};
thirdMax([1,2,2,5,3,5]);
// @lc code=end
