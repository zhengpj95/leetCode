/**
 * Three stones are on a number line at positions a, b, and c.
 *
 * Each turn, you pick up a stone at an endpoint (ie., either the lowest or highest position stone),
 * and move it to an unoccupied position between those endpoints.
 * Formally, let's say the stones are currently at positions x, y, z with x < y < z.
 * You pick up the stone at either position x or position z, and move that stone to an integer position k, with x < k < z and k != y.
 *
 * The game ends when you cannot make any more moves, ie. the stones are in consecutive positions.
 *
 * When the game ends, what is the minimum and maximum number of moves that you could have made?
 * Return the answer as an length 2 array: answer = [minimum_moves, maximum_moves]
 *
 * Note:
 * 1 <= a <= 100
 * 1 <= b <= 100
 * 1 <= c <= 100
 * a != b, b != c, c != a
 * @author zheng
 * @date 2020/10/31 10:52:27
 */

/**
 * Time complexity: O(nlogn) = O(3log3) = O(1) 排序算法需要一点时间，但是这种情况可以忽略不计
 * Space complexity: O(3) = O(1)
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
const numMovesStones = function (a, b, c) {
	let list = [a, b, c];
	list.sort((a, b) => a - b);
	if (list[2] - list[0] == 2) {
		// 连续的情况
		return [0, 0];
	} else if (list[1] - list[0] <= 2 || list[2] - list[1] <= 2) {
		// 有左两个或右两个的距离为1或2
		return [1, list[2] - list[0] - 2];
	} else {
		return [2, list[2] - list[0] - 2];
	}

	// 化简
	// if (list[2] - list[0] == 2) return [0, 0];
	// return [Math.min(list[1] - list[0], list[2] - list[1]) <= 2 ? 1 : 2, list[2] - list[0] - 2];
};

/**
 * 大神解法
 */
const numMovesStones2 = function (a, b, c) {
	let [diff1, diff2, diff3] = [Math.abs(a - b), Math.abs(b - c), Math.abs(a - c)];
	let [min, max] = [Math.min(diff1, diff2, diff3), Math.max(diff1, diff2, diff3)];
	return max === 2 ? [0, 0] : [min < 3 ? 1 : 2, max - 2];
};

const numMovesStones3 = function (a, b, c) {
	let numsSorted = [a, b, c].sort((a, b) => a - b);

	let min = numsSorted[0];
	let mid = numsSorted[1];
	let max = numsSorted[2];

	let minDiff = mid - min - 1;
	let maxDiff = max - mid - 1;

	let minMoves;

	if (minDiff == 1 || maxDiff == 1) {
		minMoves = 1;
	} else {
		minMoves = Math.min(1, minDiff) + Math.min(1, maxDiff);
	}

	let maxMoves = minDiff + maxDiff;

	return [minMoves, maxMoves];
};

let a = 1,
	b = 4,
	c = 12;
// (a = 4), (b = 3), (c = 2);
(a = 3), (b = 5), (c = 1);
console.log(numMovesStones(a, b, c));
console.log(numMovesStones2(a, b, c));
console.log(numMovesStones3(a, b, c));
