/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    /**
     * 哈希表
     */
    // let set = new Set();
    // let curr = head;

    // while(curr !== null){
    //     if(set.has(curr)){
    //         return true;
    //     }
    //     set.add(curr);
    //     curr = curr.next;
    // }
    // return false

    /**
     * 快慢指针
     */

    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            return true
        }
    }
    return false;
};
// @lc code=end

