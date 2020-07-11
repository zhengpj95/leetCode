
// Definition for a binary tree node.
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

/**
 * 方法一：递归
 * Time complexity: O(n)
 * Space complexity: 最坏的情况O(n)，平均情况O(logn)
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	let nums = [];
	let traversal = function (root) {
		if (!root) return;
		traversal(root.left);
		nums.push(root.val);
		traversal(root.right);
	};
	traversal(root);
	return nums;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal1 = function (root) {
	let nums = [];
	traversal(root, nums);
	return nums;
};

/**
 * @param {TreeNode} root 
 * @param {number[]} res 
 */
var traversal = function (root, res) {
	if (!root) {
		return;
	}
	traversal(root.left, res);
	res.push(root.val);
	traversal(root.right, res);
};

/**
 * 方法二：基于栈的遍历
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal2 = function (root) {
	let nums = [];
	let stack = [];
	let curNode = root;
	// 结点存在或者栈未空
	while (curNode || stack.length) {
		while (curNode) {
			stack.push(curNode);
			curNode = curNode.left;
		}
		curNode = stack.pop();
		nums.push(curNode.val);
		curNode = curNode.right;
	}
	return nums;
};

/**
 * 方法三：莫里斯遍历
 * step 1：将当前节点 current 初始化为根节点
 * step 2：while current 不为空
 * 		若 current 没有左子节点
 * 			a. 将 current 添加到输出
 * 			b. 进入右子树，亦即，current = current.right
 * 		否则
 * 			a. 在 current 的左子树中，令 current 成为最右侧节点的右子节点
 * 			b. 进入左子树，亦即，current = current.left
 * 
 * Time complexity: O(n)。 想要证明时间复杂度是 O(n)，最大的问题是找到每个节点的前驱节点的时间复杂度。
 * 乍一想，找到每个节点的前驱节点的时间复杂度应该是 O(nlogn)，因为找到一个节点的前驱节点和树的高度有关。
 * 但事实上，找到所有节点的前驱节点只需要 O(n) 时间。
 * 一棵 n 个节点的二叉树只有 n-1 条边，每条边只可能使用2次，一次是定位节点，一次是找前驱节点。
 * 故复杂度为 O(n)。
 * Space complexity: O(n)。使用了长度为 n 的数组。
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal3 = function (root) {
	let res = [];
	let currNode = root;
	let preNode;
	while (currNode) {
		if (!currNode.left) {
			// 没有左侧节点
			res.push(currNode.val);
			currNode = currNode.right;
		} else {
			// 有左侧子树
			preNode = currNode.left;
			// 找出最右侧的右子节点（已是叶子节点或者没有右子节点的节点）
			while (preNode.right) {
				preNode = preNode.right;
			}
			// 将当前根节点当作上寻找到的最右侧节点的右子节点
			preNode.right = currNode;
			// 进入左子树
			let temp = currNode;
			currNode = currNode.left;//回到之前currNode的左子树，这一步之前 currNode 的左子树还存在的
			temp.left = null;	//当前preNode.right的右子节点 currNode (temp) 的左子树为 null 
		}
	}
	return res;
};

// =============test=============

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
node1.left = null;
node1.right = node2;
node2.left = node3;
node2.right = node4;
node3.left = node3.right = null;
node4.left = node4.right = null;

let nums = inorderTraversal3(node1);
console.log(nums);


