/**
 * Given a non negative integer number num.
 * For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation
 * and return them as an array.
 *
 * Follow up:
 *  It is very easy to come up with a solution with run time O(n*sizeof(integer)).
 * But can you do it in linear time O(n) /possibly in a single pass?
 * Space complexity should be O(n).
 * Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
 * @author zheng
 * @date 2020/12/21 19:06:35
 */

/**
 * 区分奇偶数
 * Runtime: 100 ms, faster than 74.63% of JavaScript online submissions for Counting Bits.
 * Memory Usage: 44.7 MB, less than 36.58% of JavaScript online submissions for Counting Bits.
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
	let dp = [0];

	// 二进制位表示数，1,2,4,8,16,32,64,128...
	let bits = [1];
	let tmp = 1;
	for (let i = 1; 2 * tmp <= num; i++) {
		bits.push(2 * tmp);
		tmp *= 2;
	}

	let temp = 1;
	for (let i = 1; i <= num; i++) {
		if (i & 1) {
			//odd，奇数等于其前一个数+1
			dp[i] = dp[i - 1] + 1;
		} else {
			//even，等于其前一位表示的最大二进制加剩余的数，比如 15 = 8 + 7，12 = 8 + 4
			if (bits.indexOf(i) >= 0) {
				dp[i] = 1;
				temp = bits[bits.indexOf(i)];
			} else {
				dp[i] = dp[temp] + dp[i - temp];
			}
		}
	}
	return dp;
};
