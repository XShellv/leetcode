/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    /**
     * 快速排序
     * @param {number[]} nums
     * @return {number[]}
     */
    function quickSort(nums) {
        if (nums.length <= 1) return nums;
        const mid = parseInt((nums.length - 1) / 2);
        const pivot = nums[mid];
        let left = [], right = [];
        for (let i = 0; i < nums.length; i++) {
            if (i === mid) continue;
            if (nums[i] > pivot) {
                right.push(nums[i]);
            } else {
                left.push(nums[i])
            }
        }
        return quickSort(left).concat([pivot], quickSort(right))
    }
    function mergeSort(nums) {
        const mid = parseInt(nums.length / 2);
        if (nums.length < 2) {
            return nums
        }
        const left = nums.splice(0, mid);
        return merge(mergeSort(left), mergeSort(nums))
        /**
         * 归并方法
         * @param {number[]} left 
         * @param {number[]} right 
         */
        function merge(left, right) {
            let arr = [];
            while (left.length && right.length) {
                if (left[0] < right[0]) {
                    arr.push(left.shift())
                } else {
                    arr.push(right.shift())
                }
            }
            return arr.concat(left, right)
        }

    }
    return quickSort(nums)
    // return mergeSort(nums)
};
// @lc code=end

