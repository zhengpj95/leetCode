/**
 * Given an array nums of n integers and an integer target,
 * are there elements a, b, c, and d in nums such that a + b + c + d = target?
 * Find all unique quadruplets in the array which gives the sum of target.
 * Note: The solution set must not contain duplicate quadruplets.
 */

/**
 * Approach 1: Two Points
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
	nums.sort((a, b) => a - b);
	let res = [];
	if (!nums || nums.length < 4) {
		return [];
	}

	for (let i = 0; i < nums.length - 3; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}
		for (let j = i + 1; j < nums.length; j++) {
			if (j > i + 1 && nums[j] === nums[j - 1]) {
				continue;
			}
			let low = j + 1;
			let high = nums.length - 1;
			while (low < high) {
				let sum = nums[i] + nums[j] + nums[low] + nums[high];
				if (sum === target) {
					res.push([nums[i], nums[j], nums[low], nums[high]]);
					while (low < high && nums[low] === nums[low + 1]) {
						low++;
					}
					while (low < high && nums[high] === nums[high - 1]) {
						high++;
					}
					low++;
					high--;
				} else if (sum < target) {
					low++;
				} else {
					high--;
				}
			}
		}
	}
	return res;
};

// console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));
// console.log(fourSum([0, 0, 0, 0], 0));
// console.log(fourSum([5, 5, 3, 5, 1, -5, 1, -2], 4));
// console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));
console.log(fourSum([-1, 0, -5, -2, -2, -4, 0, 1, -2], -9));