/**
 * Given an array nums of n integers, are there elements a, b, c in nums
 * such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 * Note: The solution set must not contain duplicate triplets.
 */

const threeSum = function (nums) {
	if (!nums || nums.length < 3) {
		return [];
	}
	let res = [];
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			break;
		}
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}

		let low = i + 1;
		let high = nums.length - 1;
		while (low < high) {
			let sum = nums[i] + nums[low] + nums[high];
			if (sum === 0) {
				res.push([nums[i], nums[low], nums[high]]);
				while (low < high && nums[high] === nums[high - 1]) {
					high--;
				}
				while (low < high && nums[low] === nums[low + 1]) {
					low++;
				}
				low++;
				high--;
			} else if (sum < 0) {
				low++;
			} else if (sum > 0) {
				high--;
			}
		}
	}
	return res;
};


console.log(threeSum([-1, 0, 1, 2, -1, -4]));

/**
 * 未去掉重复值
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSumWithDuplicate2 = function (nums) {
	let result = [];
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			break;
		}
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		let remain = 0 - nums[i];
		let res1 = twoSum(nums, remain);
		if (res1 && res1.length) {
			for (let j = 0; j < res1.length; j++) {
				result.push([nums[i], ...res1[j]]);
			}
		}
	}
	return result;
};

/**
 * twoSum
 * @param {number[]} nums 
 * @param {number} target 
 * @param {number} start 
 * @param {number} end 
 */
const twoSum = function (nums, target) {
	let res = [];
	let obj = {};
	for (let i = 0; i < nums.length; i++) {
		// if (nums[i] > 0) {
		// 	break;
		// }
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		let remain = target - nums[i];
		for (let id in obj) {
			if (obj[id] === remain) {
				res.push([nums[parseInt(id)], nums[i]]);
			}
		}
		obj[i] = nums[i];
	}
	return res;
};

/**
 * 没有去掉重复值
 * @param {number[]} nums 
 */
function threeSumWithDuplicate(nums) {
	let obj = {};
	for (let i = 0; i < nums.length; i++) {
		obj[i] = 0 - nums[i];
	}

	let res = [];
	let had = [];
	for (let id in obj) {
		let item = obj[id];
		if (had.includes(item)) {
			continue;
		}

		let idx = parseInt(id);
		for (let i = idx + 1; i < nums.length; i++) {
			for (let j = i + 1; j < nums.length; j++) {
				if (item == nums[i] + nums[j]) {
					res.push([nums[idx], nums[i], nums[j]]);
					if (!had.includes(item)) {
						had.push(item);
					}
				}
			}
		}
	}
	// console.log(obj, had);
	// console.log(res);
	return res;
};