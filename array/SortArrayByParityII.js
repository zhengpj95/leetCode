/**
 * Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
 * Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
 * Return any answer array that satisfies this condition.
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
	let even = 0,
		odd = 1;
	let size = nums.length;
	while (even < size && odd < size) {
		let findEven = false,
			findOdd = false;
		while (even < size) {
			if (nums[even] % 2 != 0) {
				findEven = true;
				break;
			}
			even += 2;
		}
		while (odd < size) {
			if (nums[odd] % 2 == 0) {
				findOdd = true;
				break;
			}
			odd += 2;
		}
		if (findEven && findOdd) {
			let temp = nums[even];
			nums[even] = nums[odd];
			nums[odd] = temp;
		}
		// console.log(`${even},${odd} : ${nums[even]},${nums[odd]}`);
	}
	if (even >= size && odd >= size) {
		return nums;
	}
	return [];
};

console.log(sortArrayByParityII([5, 4]));
