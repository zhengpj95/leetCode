/**
 * Given an array nums of n integers and an integer target,
 * find three integers in nums such that the sum is closest to target.
 * Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 *
 * Constraints:
 * 3 <= nums.length <= 10^3
 * -10^3 <= nums[i] <= 10^3
 * -10^4 <= target <= 10^4
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
const threeSumClosest = function (nums, target) {
	nums.sort((a, b) => a - b);
	let res = Number.MAX_SAFE_INTEGER;
	let lastDest = Number.MAX_SAFE_INTEGER;//记录过程中的最短距离

	for (let i = 0; i < nums.length - 2; i++) {
		let low = i + 1;
		let high = nums.length - 1;
		while (low < high) {
			let sum = nums[i] + nums[low] + nums[high];//三数之和
			let dest = Math.abs(sum - target);//距离
			if (dest === 0) {
				return sum;
			}

			if (dest < lastDest) {
				res = sum;
				lastDest = dest;
			}

			if (sum < target) {
				low++;
			} else if (sum > target) {
				high--;
			}
		}
	}
	return res;
};

console.log(`---`, threeSumClosest([0, 2, 1, -3], 1));