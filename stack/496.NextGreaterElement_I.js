/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
	if (!nums1 || !nums1.length) {
		return [];
	}

	let stacks = [0]; //先入首项
	let greaterNums = [];
	for (let i = 1; i < nums2.length; i++) {
		if (!stacks.length) {
			stacks.push(i);
			continue;
		}
		let topIdx = stacks[stacks.length - 1];
		if (nums2[i] < nums2[topIdx]) {
			stacks.push(i);
		} else {
			while (stacks.length > 0) {
				if (nums2[i] > nums2[stacks[stacks.length - 1]]) {
					let topIdx2 = stacks.pop();
					greaterNums[topIdx2] = nums2[i];
				} else {
					break;
				}
			}
			stacks.push(i);
		}
	}
	while (stacks.length) {
		let top = stacks.pop();
		greaterNums[top] = -1;
	}

	for (let i = 0; i < nums1.length; i++) {
		let idx = nums2.indexOf(nums1[i]);
		nums1[i] = greaterNums[idx];
	}
	return nums1;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement2 = function (nums1, nums2) {
	let map = new Map();
	let stack = [];
	for (let num of nums2) {
		while (stack.length > 0 && num > stack[stack.length - 1]) {
			map.set(stack.pop(), num);
		}
		stack.push(num);
	}
	for (let i = 0; i < nums1.length; i++) {
		nums1[i] = map.get(nums1[i]) || -1;
	}
	return nums1;
};

let nums1 = [137, 59, 92, 122, 52, 131, 79, 236, 94, 171, 141, 86, 169, 199, 248, 120, 196];
let nums2 = [137, 59, 92, 122, 52, 131, 79, 236, 94, 171, 141, 86, 169, 199, 248, 120, 196];

// nextGreaterElement(nums1, nums2);
// console.log(nextGreaterElement(nums1, nums2).join('-'));
console.log(nextGreaterElement2(nums1, nums2).join('-'));
