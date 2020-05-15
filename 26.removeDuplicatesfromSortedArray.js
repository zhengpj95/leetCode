/**
 * @param {number[]} nums
 * @return {number}
 */

// const removeDuplicates = function (nums) {
// 	nums = new Set([...nums]);
// 	return nums.size;
// };

const removeDuplicates = function (nums) {
	if (!nums.length) {
		return 0;
	}
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] == nums[i + 1]) {
			nums.splice(i + 1, 1);
			i--;
		}
	}
	return nums.length;
};

const removeDuplicates2 = (nums) => {
	if (nums.length <= 1) {
		return nums.length;
	}
	let total = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] != nums[i - 1]) {
			// nums[total] = nums[i];
			total++;
		}
	}
	console.log(nums);
	return total;
}

// let size = removeDuplicates2([1, 1, 2]);
let size = removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(size);