/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
	if (!matchsticks || matchsticks.length < 4) {
		return false;
	}
	let sum = matchsticks.reduce((pre, cur) => {
		return pre + cur;
	}, 0);
	if (sum % 4 != 0) {
		return false;
	}
	matchsticks.sort((a, b) => b - a);
	let partSum = [0, 0, 0, 0];
	let targetSum = sum / 4;

	let backtracking = (idx) => {
		// console.log(partSum, idx);
		if (idx >= matchsticks.length) {
			return true;
		}
		for (let k = 0; k < 4; k++) {
			if (partSum[k] + matchsticks[idx] <= targetSum) {
				partSum[k] += matchsticks[idx];
				if (backtracking(idx + 1)) {
					return true;
				}
				partSum[k] -= matchsticks[idx];
			}
		}
		return false;
	};
	return backtracking(0);
};

let matchsticks = [1, 1, 2, 2, 2];
// matchsticks = [3, 3, 3, 3, 4];
console.log(makesquare(matchsticks));
