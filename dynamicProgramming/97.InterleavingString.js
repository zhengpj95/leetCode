/**
 * Time Limit Exceeded
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleaveWithRecursion = function (s1, s2, s3) {
	if (s1.length + s2.length != s3.length) {
		return false;
	}

	let helper = (s1, idx1, s2, idx2, res) => {
		if (res == s3 && idx1 == s1.length && idx2 == s2.length) {
			return true;
		}
		let isSame = false;
		if (idx1 < s1.length) {
			isSame = isSame || helper(s1, idx1 + 1, s2, idx2, res + s1[idx1]);
		}
		if (idx2 < s2.length) {
			isSame = isSame || helper(s1, idx1, s2, idx2 + 1, res + s2[idx2]);
		}
		return isSame;
	};
	return helper(s1, 0, s2, 0, "");
};

/**
 * 二维dp数组
 * dp[i][j] = 1 表示 s1 的前i个元素和 s2 的前j个元素，可以组成 s3 的前 i+j 个元素（随意交叉）
 * Time complexity: O(m*n)
 * Space complexity: O(m*n)
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
	if (s1.length + s2.length != s3.length) {
		return false;
	}
	let dp = new Array(s1.length + 1);
	for (let i = 0; i < dp.length; i++) {
		dp[i] = new Array(s2.length + 1);
	}
	for (let i = 0; i <= s1.length; i++) {
		for (let j = 0; j <= s2.length; j++) {
			let k = i + j - 1; //index of s3
			if (i == 0 && j == 0) {
				dp[i][j] = true;
			} else if (i == 0) {
				// s1.length = 0, s2 == s3
				dp[i][j] = dp[i][j - 1] && s2[j - 1] == s3[k];
			} else if (j == 0) {
				// s2.length = 0, s1 = s3
				dp[i][j] = dp[i - 1][j] && s1[i - 1] == s3[k];
			} else {
				// 填字游戏。s3[k]跟左边的相等，把[i][j]上方的移下来；跟上方的相等，把左边的移过来；两方都相等，则把其左边和上方的 || 下来
				dp[i][j] = (dp[i][j - 1] && s2[j - 1] == s3[k]) || (dp[i - 1][j] && s1[i - 1] == s3[k]);
			}
		}
	}
	// console.log(dp);
	return dp[s1.length][s2.length];
};

/**
 * 凡是有递归的，都要联想到使用缓存减少递归次数
 * Recursion with memoization
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleaveWithMemo = function (s1, s2, s3) {
	if (s1.length + s2.length != s3.length) {
		return false;
	}
	let memo = new Map();

	let helper = (idx1, idx2, idx3) => {
		if (idx3 >= s3.length && idx1 >= s1.length && idx2 >= s2.length) {
			return true;
		}
		let key = `${idx1}_${idx2}_${idx3}`;
		if (memo.has(key)) {
			return memo.get(key);
		}
		let rst = false;
		if (s1[idx1] == s3[idx3]) {
			rst = rst || helper(idx1 + 1, idx2, idx3 + 1);
		}
		if (!rst && s2[idx2] == s3[idx3]) {
			rst = rst || helper(idx1, idx2 + 1, idx3 + 1);
		}
		memo.set(key, rst);
		return rst;
	};

	let rst = helper(0, 0, 0);
	// console.log(memo);
	return rst;
};

let s1 = "aabcc";
s2 = "dbbca";
s3 = "aadbbcbcac";

// s1 = "cabbcaaacacbac";
// s2 = "acabaabacabcca";
// s3 = "cacabaabacaabccbabcaaacacbac";
console.log(isInterleaveWithMemo(s1, s2, s3));
