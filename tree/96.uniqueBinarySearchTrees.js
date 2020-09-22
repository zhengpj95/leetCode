/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function (n) {
	let dp = [];
	dp[0] = dp[1] = 1; //空树或只有一个根节点的树

	for (let i = 2; i <= n; i++) {
		let sum = 0;
		for (let j = 1; j <= i; j++) {
			// j-1左节点树，i-j有节点数。笛卡尔积
			sum += dp[j - 1] * dp[i - j];
		}
		dp[i] = sum;
	}
	return dp[n];
};

let res = numTrees(19);
console.log(res);
