/**
 * A message containing letters from A-Z is being encoded to numbers using the following mapping:
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * Given a non-empty string containing only digits, determine the total number of ways to decode it.
 * The answer is guaranteed to fit in a 32-bit integer.
 * Constraints:
 * 1 <= s.length <= 100
 * s contains only digits and may contain leading zero(s).
 * @author zheng
 * @date 2020/12/02 15:07:29
 */

/**
 * 类似于爬楼梯问题，到第i位时，其单独组成的一位元素（大于0且小于10）或者与前一位组成两位元素（大于9且小于27）
 * 第i位的组成方式就有上面两个方式的叠加，也就是 dp[i-1]+dp[i-2] （下面代码dp添加多一位，注意区别）
 * dp[i]含义：dp[i]表示第i位时，0-i的元素的所有组成方式
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
	let dp = new Array(s.length + 1).fill(0);
	// 加多一位来计算第一个两位数情况
	dp[0] = dp[1] = s[0] != '0' ? 1 : 0;

	for (let i = 1; i < s.length; i++) {
		// 一位的情况
		if (parseInt(s[i]) > 0 && parseInt(s[i]) < 10) {
			dp[i + 1] += dp[i];
		}
		// 两位的情况
		let sub = parseInt(s.substring(i - 1, i + 1));
		if (sub >= 10 && sub <= 26) {
			dp[i + 1] += dp[i - 1];
		}
	}
	return dp[dp.length - 1];
};
