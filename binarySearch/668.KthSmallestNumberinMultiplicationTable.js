/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
	let getMinCount = (m, n, mid) => {
		let result = 0;
		for (let i = 1; i <= m; i++) {
			result += Math.min(Math.floor(mid / i), n);
		}
		return result;
	};

	let low = 1,
		high = m * n;
	while (low < high) {
		let mid = low + Math.floor((high - low) / 2);
		if (getMinCount(m, n, mid) >= k) {
			high = mid;
		} else {
			low = mid + 1;
		}
	}
	return low;
};
