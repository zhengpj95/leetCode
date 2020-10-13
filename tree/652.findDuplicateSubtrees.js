/**
 * Given the root of a binary tree, return all duplicate subtrees.
 * For each kind of duplicate subtrees, you only need to return the root node of any one of them.
 * Two trees are duplicate if they have the same structure with the same node values.
 * @author zheng
 * @date 2020/10/13 09:10:09
 */

/**
 * 首先要去判断使用什么遍历，前中后还是层次遍历
 * 很显然，这里主要判断是否有子树相同，那么就是先得到左右子树，再去判断，那就是后序遍历
 * 而且你也不能得到子树后，再依次判断每个节点的结果以及值是否相同，那么这里使用 序列化 的方式来判断
 *
 * 当然这道题使用前序遍历或中序遍历也是可以的，主要是判断 序列化 相同即可。但是分析题目的时候要有这种思路
 *
 * 遇到树的问题，无非就是判断使用什么遍历方式，再在遍历方式中进行题目需求的操作
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * Time complexity: O(N^2) 需要遍历每个结点，但是每个结点的序列化也要花费 O(N) 的时间
 * Space complexity: O(N^2)
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = function (root) {
	if (!root) return [];
	let result = [];
	let map = new Map();
	let traversal = (root) => {
		if (!root) {
			return '#';
		}
		let leftStr = traversal(root.left);
		let rightStr = traversal(root.right);

		let serialize = leftStr + ',' + rightStr + ',' + root.val;
		if (map.get(serialize) == 1) {
			result.push(root);
		}
		map.set(serialize, map.has(serialize) ? map.get(serialize) + 1 : 1);
		return serialize;
	};
	traversal(root);
	return result;
};

let arr = [1, 2, 3, 4, null, 2, 4, null, null, 4];
let root = createTree(arr);
console.log(findDuplicateSubtrees(root));
