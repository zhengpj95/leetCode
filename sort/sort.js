/**
 * @param {number[]} nums
 * @return {number[]}
 */
function bubbleSort(nums) {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = 0; j < nums.length - 1 - i; j++) {
			if (nums[j] > nums[j + 1]) {
				[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
			}
		}
	}
	return nums;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function selectionSort(nums) {
	let minIdx = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		minIdx = i;
		// find the position of minimum value
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] < nums[minIdx]) {
				minIdx = j;
			}
		}
		// exchange to correct position
		[nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
	}
	return nums;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function insectionSort(nums) {
	for (let i = 1; i < nums.length; i++) {
		let pos = i - 1;
		let curNum = nums[i];
		// find the correct position
		while (pos >= 0 && nums[pos] > curNum) {
			nums[pos + 1] = nums[pos];
			pos -= 1;
		}
		// insert to correct position
		nums[pos + 1] = curNum;
	}
	return nums;
}

/**
 * gap 为每组间隔，比如 nums.length = 12, 则 gap 分别为 6, 3, 1
 * gap = 6 : [0,6], [1,7], [2,8], [3,9], [4,10], [5,11] //此数值表示数组下标
 * gap = 3 : [0,3,6,9], [1,4,7,10], [2,5,8,11]
 * gap = 1 : [0,...,11]
 * @param {number[]} nums
 * @return {number[]}
 */
function shellSort(nums) {
	for (let gap = Math.floor(nums.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
		// console.log(gap);
		for (let i = gap; i < nums.length; i++) {
			let idx = i;
			while (idx - gap >= 0 && nums[idx] < nums[idx - gap]) {
				swap(nums, idx, idx - gap);
				idx -= gap;
			}
		}
		// console.log(nums);
	}
	return nums;
}

// 交换
function swap(nums, a, b) {
	let temp = nums[a] + nums[b];
	nums[b] = temp - nums[b];
	nums[a] = temp - nums[b];
}

// let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// swap(ary, 0, 3);
// console.log(ary);

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 */
function mergeSort(nums, left, right) {
	if (left >= right) {
		return;
	}
	let mid = Math.floor((left + right) / 2);
	mergeSort(nums, left, mid);
	mergeSort(nums, mid + 1, right);
	merge(nums, left, mid, right);
}

/**
 *
 * @param {number[]} nums
 * @param {number} left
 * @param {number} mid
 * @param {number} right
 */
function merge(nums, left, mid, right) {
	let leftP = left;
	let rightP = mid + 1;
	let pos = 0;
	let temp = [];
	// compare the [left, mid] and [mid+1, right]
	while (leftP <= mid && rightP <= right) {
		if (nums[leftP] <= nums[rightP]) {
			temp[pos++] = nums[leftP++];
		} else {
			temp[pos++] = nums[rightP++];
		}
	}
	while (leftP <= mid) {
		temp[pos++] = nums[leftP++];
	}
	while (rightP <= right) {
		temp[pos++] = nums[rightP++];
	}
	// replace temp in nums
	pos = 0;
	while (left <= right) {
		nums[left++] = temp[pos++];
	}
}

/**
 * @param {number[]} nums
 */
function heapSort(nums) {
	let len = nums.length;
	// 构建大顶堆。从下往上，从右往左，遍历非叶子节点
	let lastNodeIdx = nums.length - 1;
	let parent = Math.floor((lastNodeIdx - 1) / 2);
	// i = Math.floor(len / 2) - 1;
	for (let i = parent; i >= 0; i--) {
		heapify2(nums, i, len);
	}
	// console.log(nums);

	// 调整堆结构
	for (let i = len - 1; i > 0; i--) {
		// 交换堆顶元素与末尾元素，堆顶元素就是剩余元素中最大的
		swap(nums, 0, i);
		// i 刚好表示剩余的堆的元素个数，也就是最大的都被交换到最后了，不参与
		heapify2(nums, 0, i);
	}
}

/**
 * 调整堆结构，迭代方式
 * 修改while循环里的两个if大小判断，即可改成小顶堆
 * @param {number[]} nums
 * @param {number} idx
 * @param {number} len
 */
function heapify(nums, idx, len) {
	if (idx >= len) {
		return;
	}
	let temp = nums[idx];
	let left = idx * 2 + 1; //idx左孩子序号
	while (left < len) {
		let right = left + 1;
		// 如果左孩子值小于右孩子值，p指向右孩子
		if (right < len && nums[left] < nums[right]) {
			left++;
		}
		// 如果子节点值大于父节点值，则将子节点值赋值给父节点值
		if (nums[left] > temp) {
			nums[idx] = nums[left];
			idx = left;
		} else {
			break;
		}
		// 继续left下一级的左孩子
		left = left * 2 + 1;
	}
	// 将temp放到最终的位置
	nums[idx] = temp;
}

/**
 * 调整堆结构，递归方式
 * @param {number[]} nums
 * @param {number} idx
 * @param {number} len
 */
function heapify2(nums, idx, len) {
	if (idx >= len) {
		return;
	}
	let left = idx * 2 + 1;
	let right = idx * 2 + 2;
	let max = idx;
	if (left < len && nums[left] > nums[max]) {
		max = left;
	}
	if (right < len && nums[right] > nums[max]) {
		max = right;
	}
	if (max != idx) {
		swap(nums, idx, max);
		heapify2(nums, max, len);
	}
}

/**
 * @param {number[]} nums
 */
function countingSort(nums) {
	let bucket = [];
	for (let i = 0; i < nums.length; i++) {
		if (!bucket[nums[i]]) {
			bucket[nums[i]] = 0;
		}
		bucket[nums[i]]++;
	}

	let idx = 0;
	for (let i = 0; i < bucket.length; i++) {
		while (bucket[i] && bucket[i] > 0) {
			nums[idx++] = i;
			bucket[i]--;
		}
	}
}

let arr = [13, 2, 5, 32, 6, 4, 3, 7, 5, 90, 99, 9, 8];
// console.log(shellSort(arr));
heapSort(arr);
console.log(arr);
