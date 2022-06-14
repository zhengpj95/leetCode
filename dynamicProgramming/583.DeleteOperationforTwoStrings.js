/**
 * O(T): O(m*n)
 * O(S): O(m*n)
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
	let dp = [];
	for (let i = 0; i <= word1.length; i++) {
		let ary = new Array(word2.length + 1).fill(0);
		dp[i] = ary;
	}

	for (let r = 1; r <= word1.length; r++) {
		for (let c = 1; c <= word2.length; c++) {
			if (word1[r - 1] == word2[c - 1]) {
				dp[r][c] = 1 + dp[r - 1][c - 1];
			} else {
				dp[r][c] = Math.max(dp[r - 1][c], dp[r][c - 1]);
			}
		}
	}
	// console.log(dp);
	return word1.length + word2.length - 2 * dp[word1.length][word2.length];
};

console.log(minDistance("a", "b"));
