/**
 * Given a string s and a string t, check if s is subsequence of t.
 * A subsequence of a string is a new string which is formed from the original string
 * by deleting some (can be none) of the characters
 * without disturbing the relative positions of the remaining characters.
 * (ie, "ace" is a subsequence of "abcde" while "aec" is not).
 *
 * Follow up:
 * If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B,
 * and you want to check one by one to see if T has its subsequence.
 * In this scenario, how would you change your code?
 *
 * Constraints:
 * 0 <= s.length <= 100
 * 0 <= t.length <= 10^4
 * Both strings consists only of lowercase characters.
 * @author zheng
 * @date 2020/11/27 16:30:56
 */

/**
 * Two Pointers
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	if (!s && !t) return true;
	if (!s) return true;
	if (!t) return false;

	let fast = 0,
		slow = 0;
	while (fast < t.length && slow < s.length) {
		if (t[fast] == s[slow]) {
			slow++;
		}

		fast++;
	}
	if (slow >= s.length) return true;
	return false;
};

/**
 * Binary Search
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence2 = function (s, t) {
	// 找出t中所有字母的下标，同ASCII码的同一个数组
	let idx = [];
	for (let i = 0; i < t.length; i++) {
		let code = t[i].charCodeAt();
		if (!idx[code]) {
			idx[code] = [];
		}
		idx[code].push(i);
	}

	// 找出t的每一个字母，其在t的序号是否是有序的
	// 使用二分法
	let sIdx = -1;
	for (let i = 0; i < s.length; i++) {
		let code = s[i].charCodeAt();
		let codeIdx = idx[code]; //此字母在t中下标的数组
		// 如果没有，或者所应该开始的下标不满足
		if (!codeIdx || codeIdx[codeIdx.length - 1] <= sIdx) {
			return false;
		}

		// 使用二分法开始匹配此字母是否符合有序条件
		// 下面的代码需要注意左右边界情况，左边界可以+1，右边界不行
		let left = 0,
			right = codeIdx.length - 1;
		while (left < right) {
			let mid = Math.floor((left + right) / 2);
			if (codeIdx[mid] <= sIdx) {
				left = mid + 1;
			} else {
				right = mid;
			}
		}
		sIdx = codeIdx[left]; //此字母在t中的序号
	}
	return true;
};

/**
 * dp解法
 * Time complexity: O(mn) m=s.length, n=t.length
 * Space complexity: O(mn)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequenceWithDP = function (s, t) {
	let dpFunc = (s, t) => {
		let dp = [];
		let sSize = s.length;
		let tSize = t.length;
		for (let i = 0; i <= sSize; i++) {
			dp.push([]);
		}
		for (let i = 0; i <= sSize; i++) {
			dp[i][0] = 0;
		}
		for (let i = 0; i <= tSize; i++) {
			dp[0][i] = 0;
		}
		for (let i = 1; i <= sSize; i++) {
			for (let j = 1; j <= tSize; j++) {
				if (s[i - 1] === t[j - 1]) {
					dp[i][j] = dp[i - 1][j - 1] + 1;
				} else {
					dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
				}
			}
		}
		return dp[sSize][tSize];
	};

	return dpFunc(s, t) === s.length;
};

let s = 'abc',
	t = 'ahbgdcabac';
// (s = ''), (t = 'ahbgdc');
// (s = 'acb'), (t = 'ahbgdc');
(s = 'aaaaaa'), (t = 'bbaaaa');
console.log(isSubsequence2(s, t));
