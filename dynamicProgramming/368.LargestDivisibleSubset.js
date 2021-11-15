/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
	let dp = new Array(nums.length).fill(1); //subset长度
	let preIdxList = new Array(nums.length).fill(-1); //元素对应的最长的subset的索引
	nums.sort((a, b) => a - b);

	let maxCount = 0,
		maxCountIdx = 0;

	for (let i = 0; i < nums.length; i++) {
		let preIdx = -1;
		for (let j = 0; j < i; j++) {
			if ((nums[j] % nums[i] == 0 || nums[i] % nums[j] == 0) && dp[j] + 1 > dp[i]) {
				dp[i] = dp[j] + 1;
				preIdx = j;
			}
		}
		preIdxList[i] = preIdx;
		if (dp[i] > maxCount) {
			maxCount = dp[i];
			maxCountIdx = i;
		}
	}

	let res = [];
	while (maxCountIdx != -1) {
		res.push(nums[maxCountIdx]);
		maxCountIdx = preIdxList[maxCountIdx];
	}
	// console.log(dp);
	// console.log(preIdxList);
	// console.log(res);
	return res.sort((a, b) => a - b);
};

let res = largestDivisibleSubset([1, 2, 4, 8]);
console.log(res);
