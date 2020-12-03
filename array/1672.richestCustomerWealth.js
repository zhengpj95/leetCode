/**
 * @author zheng
 * @date 2020/12/03 10:37:48
 */

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
	let max = 0;

	for (let account of accounts) {
		max = Math.max(
			max,
			account.reduce((prev, next) => prev + next, 0)
		);
	}

	// accounts.forEach((account) => {
	// 	let sum = account.reduce((prev, next) => prev + next, 0);
	// 	if (sum > max) max = sum;
	// });
	return max;
};
