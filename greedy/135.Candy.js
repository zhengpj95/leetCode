/**
 * There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
 * You are giving candies to these children subjected to the following requirements:
 * 		1.Each child must have at least one candy.
 * 		1.Children with a higher rating get more candies than their neighbors.
 * Return the minimum number of candies you need to have to distribute the candies to the children.
 */

/**
 * 左右分别遍历，两次遍历后的最大即为该child的candies
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
	let ary = new Array(ratings.length).fill(0);
	ary[0] = 1;
	for (let i = 1; i < ratings.length; i++) {
		if (ratings[i] > ratings[i - 1]) {
			ary[i] = ary[i - 1] + 1;
		} else {
			ary[i] = 1;
		}
	}
	// console.log(ary);

	ary[ratings.length - 1] = Math.max(ary[ratings.length - 1], 1);
	for (let i = ratings.length - 2; i >= 0; i--) {
		let temp = 0;
		if (ratings[i] > ratings[i + 1]) {
			temp = Math.max(ary[i], ary[i + 1] + 1);
		} else {
			temp = 1;
		}
		ary[i] = Math.max(ary[i], temp);
	}
	// console.log(ary);

	return ary.reduce((pre, cur) => pre + cur, 0);
};

let ratings = [1, 0, 2];
// ratings = [1, 2, 2];
console.log(candy(ratings));
