/**
 * @author zheng
 * @date 2020/10/09 23:03:26
 */

const { TreeNode, createTree } = require('./TreeNode');

const NULL_NODE = '#';
const SEPARATOR = ',';

/**
 * Encodes a tree to a single string.
 *
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
	if (!root) return NULL_NODE + SEPARATOR;

	let left = serialize(root.left);
	let right = serialize(root.right);

	return root.val + SEPARATOR + left + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
	if (!data) return null;

	let buildTree = (list) => {
		let val = list.shift();
		if (val === NULL_NODE || !val) {
			return null;
		}
		let node = new TreeNode(val);
		node.left = buildTree(list);
		node.right = buildTree(list);
		return node;
	};

	return buildTree(data.split(SEPARATOR));
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let arr = [1, 2, 3, null, null, 4, 5];
let root = createTree(arr);
let str = serialize(root);
console.log(str);
console.log(deserialize(str));
