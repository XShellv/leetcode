/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    /**
     * 迭代
     */
    // let prev = null;
    // let curr = head;
    // while (curr !== null) {
    //     let next = curr.next;
    //     curr.next = prev;
    //     prev = curr;
    //     curr = next;
    // }
    // return prev

    /**
     * 递归
     */
    if(head === null || head.next === null){
        return head;
    }
    const p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p
};
// @lc code=end

