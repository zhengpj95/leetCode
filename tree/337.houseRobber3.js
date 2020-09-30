/**
 * The thief has found himself a new place for his thievery again.
 * There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house.
 * After a tour, the smart thief realized that "all houses in this place forms a binary tree".
 * It will automatically contact the police if two directly-linked houses were broken into on the same night.
 *
 * Determine the maximum amount of money the thief can rob tonight without alerting the police.
 * @author zheng
 * @date 2020/09/30 10:15:26
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * Time complexity: O(N^2) ?? 已经计算过的结点还会被重新计算
 * Space complexity: O(N)
 * @param {TreeNode} root
 * @return {number}
 */
const rob = function (root) {
	if (!root) return 0;
	let val = root.val;
	if (root.left) {
		val += rob(root.left.left) + rob(root.left.right);
	}
	if (root.right) {
		val += rob(root.right.left) + rob(root.right.right);
	}

	return Math.max(val, rob(root.left) + rob(root.right));
};

/**
 * DP，计算过的结点保存起来，用的时候直接取
 * 此方法觉得有点问题，因为某层的结点可能存在重复的结点值，这样根据 层级-结点值 保存的内容，会被覆盖掉
 * 但是提交LeetCode，有时可以通过的
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {TreeNode} root
 * @return {number}
 */
const rob2 = function (root) {
	if (!root) return 0;
	let map = new Map();

	let robFunc = (root, depth) => {
		if (!root) return 0;
		if (map.has(`${depth}-${root.val}`)) return map.get(`${depth}-${root.val}`);

		let val = root.val;
		if (root.left) {
			val += robFunc(root.left.left, depth + 2) + robFunc(root.left.right, depth + 2);
		}
		if (root.right) {
			val += robFunc(root.right.left, depth + 2) + robFunc(root.right.right, depth + 2);
		}

		let maxValue = Math.max(val, robFunc(root.left, depth + 1) + robFunc(root.right, depth + 1));
		map.set(`${depth}-${root.val}`, maxValue);
		return maxValue;
	};

	return robFunc(root, 0);
};

/**
 * 每个结点分 not robbed, robbed
 * 从叶子结点往根节点推，比较好理解
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {TreeNode} root
 * @return {number}
 */
const rob3 = function (root) {
	let robFunc = (root) => {
		if (!root) return { notRobbed: 0, robbed: 0 };

		let lNode = robFunc(root.left);
		let rNode = robFunc(root.right);

		// 若不抢当前结点的，则其值为其左右子树的抢的最大值之和
		let notRobbed = Math.max(lNode.notRobbed, lNode.robbed) + Math.max(rNode.notRobbed, rNode.robbed);
		// 若抢当前结点的，则当前结点值 + 其左右子树的不抢的值
		let robbed = root.val + lNode.notRobbed + rNode.notRobbed;

		return { notRobbed: notRobbed, robbed: robbed };
	};

	let { notRobbed, robbed } = robFunc(root);
	return Math.max(notRobbed, robbed);
};

let arr = [3, 4, 5, 1, 3, null, 1]; //[3, 2, 3, null, 3, null, 1];
let root = createTree(arr);
console.time();
console.log(rob(root));
console.timeEnd();
console.time();
console.log(rob2(root));
console.timeEnd();
console.time();
console.log(rob3(root));
console.timeEnd();
