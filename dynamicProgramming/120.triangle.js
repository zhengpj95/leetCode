/**
 * Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.
 *
 * Note:
 * Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
 * @author zheng
 * @date 2020/12/02 23:01:01
 */

/**
 * Runtime: 76 ms, faster than 93.24% of JavaScript online submissions for Triangle.
 * Memory Usage: 38.9 MB, less than 67.23% of JavaScript online submissions for Triangle.
 * 每一个点都是由其上面的一个或两个结点决定的
 * 最左边的由上一层最左边的决定，最右边的由上一层最右边的决定，中间的则由其上一层的相邻的两个点决定
 * 左右由上往下走下来，最后一层中的最小的点就是所需结果
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
	let size = triangle.length;
	for (let i = 1; i < size; i++) {
		for (let j = 0; j < i + 1; j++) {
			if (j == 0) triangle[i][j] += triangle[i - 1][j];
			else if (j == i) triangle[i][j] += triangle[i - 1][j - 1];
			else triangle[i][j] += Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]);
		}
	}
	return Math.min(...triangle[triangle.length - 1]);
};

let triangle = [[2], [3, 4], [5, 6, 7], [40, 30, 8, 1]];

minimumTotal(triangle);
