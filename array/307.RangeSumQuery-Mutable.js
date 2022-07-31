/**
 * Time Limit Exceeded
 * @param {number[]} nums
 */
var NumArray = function (nums) {
	this.size = nums.length || 0;
	this.nums = nums;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
	if (index >= this.size) {
		return;
	}
	this.nums[index] = val;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
	let cnt = 0;
	while (left <= right) {
		cnt += this.nums[left] + this.nums[right];

		if (left === right) {
			cnt -= this.nums[left];
		}
		left++;
		right--;
	}
	return cnt;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
