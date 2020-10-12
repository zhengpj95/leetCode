/**
 * Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == val) {
			nums.splice(i, 1);
			i--;
		}
	}
	return nums.length;
};

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement2 = function (nums, val) {
	if (!nums || !nums.length) return 0;
	let slow = 0,
		fast = 0;
	while (fast < nums.length) {
		if (nums[fast] != val) {
			nums[slow++] = nums[fast];
		}
		fast++;
	}
	return slow;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement2([3, 2, 4, 5, 2, 8, 3], 3));
