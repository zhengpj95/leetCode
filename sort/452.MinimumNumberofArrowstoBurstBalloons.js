/**
 * 问题描述：points 表示一组气球。每个 points[i] 表示一个气球的直径开始和结束位置。
 *          从x轴开始垂直发射弓箭，可以无限的飞出
 *          找出能消灭全部气球的最小弓箭数
 *
 * 解决方法：排序找出重叠部分
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
	if (!points || !points.length) {
		return 0;
	}
	points.sort((a, b) => a[1] - b[1]);
	// console.log(points)
	let result = 1;
	let _end = points[0][1];
	for (let i = 1; i < points.length; i++) {
		if (_end < points[i][0]) {
			//没有重叠部分，要切换
			result++;
			_end = points[i][1];
		}
	}
	return result;
};

let arr = [
	[9, 12],
	[1, 10],
	[4, 11],
	[8, 12],
	[3, 9],
	[7, 9],
	[6, 7],
];
console.log(findMinArrowShots(arr));
