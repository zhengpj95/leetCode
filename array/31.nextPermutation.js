/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const nextPermutation = function (nums) {
	let idx = nums.length - 2; //从后往前找，找出第一个降序的下标
	while (idx >= 0 && nums[idx] >= nums[idx + 1]) {
		idx--;
	}
	if (idx < 0) {
		return nums.sort((a, b) => a - b);
	}

	let swapIdx = nums.length - 1;
	while (swapIdx >= 0 && nums[swapIdx] <= nums[idx]) {
		swapIdx--;
	}
	// 交换元素
	let temp = nums[idx];
	nums[idx] = nums[swapIdx];
	nums[swapIdx] = temp;
	// idx后半段排序
	for (let i = idx + 1; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] > nums[j]) {
				let tmp = nums[i];
				nums[i] = nums[j];
				nums[j] = tmp;
			}
		}
	}
	return nums;
};

console.log(nextPermutation([3, 2, 1]));
console.log(nextPermutation([5, 4, 7, 5, 3, 2]));
console.log(nextPermutation([4, 2, 0, 2, 3, 2, 0]));
