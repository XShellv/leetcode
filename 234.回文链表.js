/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
// var isPalindrome = function (head) {
//     let curr = head;
//     let arr = [];
//     while (curr !== null) {
//         arr.push(curr.val);
//         curr = curr.next;
//     };
//     let i = 0, j = arr.length - 1;
//     while (i < j) {
//         if (arr[i] !== arr[j]) {
//             return false
//         }
//         i++;
//         j--;
//     }
//     return true;
// };

var isPalindrome = function (head) {
    /**
     * 
     * 链表对半
     */
    var reverseList = function (head) {
        /**
         * 迭代
         */
        let prev = null;
        let curr = head;
        while (curr !== null) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev
    };

    /**
     * 使用快慢指针找出链表中间点
     */
    var endOfFirstHalf = function (head) {
        let slow = head;
        let fast = head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next
        }
        return slow
    };

    var firstHalfEnd = endOfFirstHalf(head);
    var secondHalfStart = reverseList(firstHalfEnd);
    let p1 = head;
    let p2 = secondHalfStart;
    let flag = true;
    while (flag && p2 !== null) {
        if (p2.val !== p1.val) {
            flag = false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    firstHalfEnd.next = reverseList(secondHalfStart);
    return flag;
};
// @lc code=end

