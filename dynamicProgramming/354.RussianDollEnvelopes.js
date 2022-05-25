/**
 * Time Limit Exceeded
 * O(T): n^2
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
	envelopes.sort((a, b) => {
		if (a[0] == b[0]) {
			return a[1] - b[1]
		}
		return a[0] - b[0]
	});

	let dp = Array(envelopes.length).fill(1);

	for (let i = envelopes.length - 1; i >= 0; i--) {
		for (let j = i + 1; j < envelopes.length; j++) {
			let [wi, hi] = envelopes[i];
			let [wj, hj] = envelopes[j];
			if (wi < wj && hi < hj) {
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
	}
	return Math.max(...dp);

	// let max = 1;
	// for (let i = 1; i < envelopes.length; i++) {
	// 	for (let j = 0; j < i; j++) {
	// 		let [wi, hi] = envelopes[i];
	// 		let [wj, hj] = envelopes[j];
	// 		if (wi > wj && hi > hj && dp[i] < dp[j] + 1) {
	// 			dp[i] = dp[j] + 1
	// 		}
	// 	}
	// 	max = Math.max(max, dp[i])
	// }
	// return max;
};

console.log(maxEnvelopes(
	[
		[2, 100],
		[3, 200],
		[4, 300],
		[5, 500],
		[5, 400],
		[5, 250],
		[6, 370],
		[6, 360],
		[7, 380]
	]
));