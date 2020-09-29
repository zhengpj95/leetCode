/**
 * Serialization is the process of converting a data structure or object into a sequence of bits
 * so that it can be stored in a file or memory buffer,
 * or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
 *
 * Design an algorithm to serialize and deserialize a binary tree.
 * There is no restriction on how your serialization/deserialization algorithm should work.
 * You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
 * @author zheng
 * @date 2020/09/29 17:42:46
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
	if (!root) return '';
	let arr = [];

	let traversal = (root) => {
		if (!root) {
			arr.push(NULL_NODE);
			return;
		}
		arr.push(root.val);
		traversal(root.left);
		traversal(root.right);
	};

	traversal(root);
	return arr.join(SEPARATOR);
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
	let arr = data.split(SEPARATOR);

	let buildTree = () => {
		let val = arr.shift();
		if (val === NULL_NODE) {
			return null;
		}
		let node = new TreeNode(val);
		node.left = buildTree();
		node.right = buildTree();
		return node;
	};

	let root = buildTree();
	return root;
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
