/**
 * dfs
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
	if (start < 0 || start >= arr.length || arr[start] < 0) {
		return false;
	}
	if (arr[start] == 0) {
		return true;
	}
	let num = arr[start];
	arr[start] *= -1;
	return canReach(arr, start - num) || canReach(arr, start + num);
};

/**
 * bfs
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReachWithBFS = function (arr, start) {
	let queue = [start];
	while (queue.length) {
		// start = queue.pop();//dfs
		start = queue.shift(); // bfs
		// result
		if (arr[start] == 0) {
			return true;
		}
		// visited
		if (arr[start] < 0) {
			continue;
		}
		if (start + arr[start] < arr.length) {
			queue.push(start + arr[start]);
		}
		if (start - arr[start] >= 0) {
			queue.push(start - arr[start]);
		}
		// mark visited
		arr[start] *= -1;
	}
	return false;
};
