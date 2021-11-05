/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
	return Math.floor(Math.sqrt(2 * n + 1 / 4) - 1 / 2);
};

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoinsWithBinarySearch = function (n) {
	let low = 0,
		high = n;
	while (low <= high) {
		let row = Math.floor((low + high) / 2); //当前层
		let coins = Math.floor((row * (row + 1)) / 2); //1到row层所拥有的coins数量
		if (coins == n) {
			return row;
		}
		if (n < coins) {
			high = row - 1;
		} else {
			low = row + 1;
		}
	}
	return high;
};
