/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
	let result = [];
	let firstPoint = 0;
	let secondPoint = 0;

	while (firstPoint < firstList.length && secondPoint < secondList.length) {
		let firstItem = firstList[firstPoint];
		let secondItem = secondList[secondPoint];
		if (firstItem[1] >= secondItem[0] && secondItem[1] >= firstItem[0]) {
			let low = Math.max(firstItem[0], secondItem[0]);
			let high = Math.min(firstItem[1], secondItem[1]);
			result.push([low, high]);
		}
		firstItem[1] < secondItem[1] ? firstPoint++ : secondPoint++;
	}
	return result;
};

let firstList = [
		[0, 2],
		[5, 10],
		[13, 23],
		[24, 25],
	],
	secondList = [
		[1, 5],
		[8, 12],
		[15, 24],
		[25, 26],
	];

let res = intervalIntersection(firstList, secondList);
console.log(res);
