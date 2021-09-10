/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    if (root === null) {
        return 0;
    }
    if (root.left === null) {
        return sumOfLeftLeaves(root.right)
    }
    if (root.left.left === null && root.left.right === null) {
        return root.left.val + sumOfLeftLeaves(root.right)
    }
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
};
// @lc code=end

