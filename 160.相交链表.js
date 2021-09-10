/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let currA = headA;
    let currB = headB;
    while (currA !== currB) {
        currA = currA === null ? headB : currA.next
        currB = currB === null ? headA : currB.next
    }
    return currA;
};
// @lc code=end

