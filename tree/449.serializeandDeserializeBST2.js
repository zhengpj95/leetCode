/**
 * @author zheng
 * @date 2020/10/09 20:28:18
 */

const { TreeNode, createTree } = require('./TreeNode');

const NULL_NODE = '#';
const SEPARATOR = ',';

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
	if (!root) return '';

	let subSerialize = (root) => {
		if (!root) return NULL_NODE + SEPARATOR;
		return root.val + SEPARATOR + subSerialize(root.left) + subSerialize(root.right);
	};

	return subSerialize(root);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
	if (!data) return null;
	let list = data.split(SEPARATOR);

	let buildTree = () => {
		let val = list.shift();
		if (val === NULL_NODE || !val) return null;
		let node = new TreeNode(val);
		node.left = buildTree();
		node.right = buildTree();
		return node;
	};

	return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let arr = [
	41,
	37,
	44,
	24,
	39,
	42,
	48,
	1,
	35,
	38,
	40,
	null,
	43,
	46,
	49,
	0,
	2,
	30,
	36,
	null,
	null,
	null,
	null,
	null,
	null,
	45,
	47,
	null,
	null,
	null,
	null,
	null,
	4,
	29,
	32,
	null,
	null,
	null,
	null,
	null,
	null,
	3,
	9,
	26,
	null,
	31,
	34,
	null,
	null,
	7,
	11,
	25,
	27,
	null,
	null,
	33,
	null,
	6,
	8,
	10,
	16,
	null,
	null,
	null,
	28,
	null,
	null,
	5,
	null,
	null,
	null,
	null,
	null,
	15,
	19,
	null,
	null,
	null,
	null,
	12,
	null,
	18,
	20,
	null,
	13,
	17,
	null,
	null,
	22,
	null,
	14,
	null,
	null,
	21,
	23,
]; //[2, 1, 3];
console.log(deserialize(serialize(createTree(arr))));
