/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    /**
     * 哨兵节点
     */
    let sentinel = new ListNode(0);
    sentinel.next = head;
    let prev = sentinel, curr = head;
    while (curr !== null) {
        if (curr.val === val) {
            prev.next = curr.next;
        }
        else {
            prev = curr;
        }
        curr = curr.next
    }
    return sentinel.next;
};
// @lc code=end

