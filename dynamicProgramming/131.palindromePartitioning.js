/**
 * Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
 * A palindrome string is a string that reads the same backward as forward.
 *
 * Constraints:
 * 1 <= s.length <= 16
 * s contains only lowercase English letters.
 * @author zheng
 * @date 2020/12/10 23:06:26
 */

/**
 * Approach 1: Backtracking
 * Time complexity: O(N*2^N)
 *		where N is the length of string s.
 * 		This is the worst-case time complexity when all the possible substrings are palindrome.
 * 		Hence, there could be 2^N possible substrings in the worst case.(最坏情况下，它的回调树有2^N个结点)
 * 		For each substring, it takes O(N) time to generate substring and determine if it a palindrome or not.
 * 		This gives us time complexity as O(N*2^N)
 * Space complexity: 回调栈，存储结果空间，这个空间复杂度是多少呢？
 * 		O(N), where N is the length of the string s.
 * 		This space will be used to store the recursion stack.
 * 		For s = aaa, the maximum depth of the recursive call stack is 3 which is equivalent to N.
 *
 * 一定要想明白回溯的回调树是如何的。
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
	let result = [];

	let backtrack = (track, idx) => {
		if (idx >= s.length) {
			result.push([...track]);
		}

		for (let i = idx; i < s.length; i++) {
			if (isPalindrome(s, idx, i)) {
				track.push(s.substring(idx, i + 1));
				backtrack(track, i + 1);
				track.pop();
			}
		}
	};
	backtrack([], 0);
	return result;
};

/**
 * @param {string} s
 * @param {number} low
 * @param {number} high
 * @return {boolean}
 */
var isPalindrome = (s, low, high) => {
	while (low < high) {
		if (s[low++] != s[high--]) return false;
	}
	return true;
};

/**
 * Backtracking + DP
 * Time Complexity : O(N*2^N), where N is the length of string s. In the worst case, there could be 2^N possible substrings
 * 		and it will take O(N) to generate each substring using substr as in Approach 1.
 * 		However, we are eliminating one additional iteration to check if substring is a palindrome or not.
 * Space Complexity: O(N*N), where N is the length of the string s.
 * 		The recursive call stack would require N space as in Approach 1.
 * 		Additionally we also use 2 dimensional array dp of size N*N
 * This gives us total space complexity as O(N*N) + O(N) = O(N*N)
 * @param {string} s
 * @return {string[][]}
 */
var partitionWithDP = function (s) {
	let result = [];
	let dp = new Array(s.length);
	for (let i = 0; i < dp.length; i++) {
		dp[i] = new Array(s.length).fill(0);
	}

	let backtrack = (track, start) => {
		if (start >= s.length) {
			result.push([...track]);
		}

		for (let end = start; end < s.length; end++) {
			// end-start <= 2 ==> 'a', 'aa', 'aca' is palindrome
			// why dp[start+1][end-1]? because backtracking is recursion,
			// when operate dp[start][end], dp[start+1][end-1] is done.
			if (s[start] == s[end] && (end - start <= 2 || dp[start + 1][end - 1])) {
				dp[start][end] = 1;
				track.push(s.substring(start, end + 1));
				backtrack(track, end + 1);
				track.pop();
			}
		}
	};
	backtrack([], 0);
	return result;
};

let s = 'aaa';
console.log(partition(s));
