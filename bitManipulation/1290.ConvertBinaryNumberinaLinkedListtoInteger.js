/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
	let result = head.val;
	while (head && head.next) {
		result = (result << 1) | head.next.val; //result = result * 2 + head.next.val;
		head = head.next;
	}
	return result;
};
