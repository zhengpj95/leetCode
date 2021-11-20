/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
	let result = nums[0];
	for (let i = 1; i < nums.length; i++) {
		result ^= nums[i];
	}
	return result;

	// for (let i = 0; i < nums.length; i += 2) {
	// 	if (nums[i] == nums[i + 1]) {
	// 		continue;
	// 	}
	// 	return nums[i];
	// }
};
