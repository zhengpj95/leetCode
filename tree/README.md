# Tree

## 1. 树的类

```javascript
function TreeNode(val, left, right) {
  this.val = val === undefined || val === null ? 0 : val;
  this.left = left === undefined || left === null ? null : left;
  this.right = right === undefined || right === null ? null : right;
}
```

## 2. 创建树

```javascript
// 由层次遍历所得的数组来构建树
// 非叶子节点，其左右子孩子为空的，要使用 null 来替代位置
function createTree(nums) {
  if (!nums || !nums.length) return null;
  let root = new TreeNode(nums[0]);
  let list = [root];

  for (let i = 1; i < nums.length; ) {
    let parent = list.shift();
    let lValue = nums[i++];
    if (lValue !== undefined && lValue !== null) {
      parent.left = new TreeNode(lValue);
      list.push(parent.left);
    } else {
      parent.left = null;
    }

    let rValue = nums[i++];
    if (rValue !== undefined && rValue !== null) {
      parent.right = new TreeNode(rValue);
      list.push(parent.right);
    } else {
      parent.right = null;
    }
  }
  return root;
}
```

## 3. 树的遍历

树的遍历分为：**前序遍历**，**中序遍历**，**后序遍历**，**层级遍历**

前序、中序、后序遍历有三种方式：递归，基于栈的遍历，Morris遍历；层级遍历主要就是基于栈的。

```javascript
// 递归遍历
let traversal = (root) => {
  if (!root) {
    return;
  }
  // 前序
  traversal(root.left);
  // 中序
  traversal(root.right);
  // 后序
};

// 基于栈的前序遍历 --- 返回遍历结果
const preorderTraversal = function (root) {
  let res = [];
  let stack = [];
  let curNode = root;
  while (curNode) {
    res.push(curNode.val);
    if (curNode.right) {
      stack.push(curNode.right);
    }
    curNode = curNode.left;
    if (!curNode && stack.length) {
      curNode = stack.pop();
    }
  }
  return res;
};

// 基于栈的中序遍历
const inorderTraversal = function (root) {
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

// 基于栈的后序遍历
const postorderTraversal = function (root) {
  let res = [];
  let stack = [];
  let curNode = root;

  while (curNode) {
    res.unshift(curNode.val);
    if (curNode.left) {
      stack.push(curNode.left);
    }
    if (curNode.right) {
      stack.push(curNode.right);
    }
    curNode = stack.pop();
  }
  return res;
};
```

**Morris 遍历：**

```javascript
/**
 * step 1：将当前节点 current 初始化为根节点
 * step 2：while current 不为空
 *      若 current 没有左子节点
 *        a. 将 current 添加到输出
 *        b. 进入右子树，亦即，current = current.right
 *      否则
 *        a. 在 current 的左子树中，令 current 成为最右侧节点的右子节点
 *        b. 进入左子树，亦即，current = current.left
 *
 *
 * 记当前节点为 curNode
 * 1. 如果 curNode 无左孩子，curNode 向右移动（curNode = curNode.right）
 * 2. 如果 curNode 有左孩子，找到 curNode 左子树的最有节点（也就是 curNode 的前驱节点），记为 mostR
 *    2.1 如果 mostR 的right指针指向空，则让其指向 curNode，curNode 向左移动（curNode = curNode.left）
 *    2.2 如果 mostR 的right指针指向 curNode，则让其指向空，curNode 向右移动（curNode = curNode.right）
 */

// Morris 中序遍历
const morrisTraversal = function (root) {
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
      currNode = currNode.left; //回到之前currNode的左子树，这一步之前 currNode 的左子树还存在的
      temp.left = null; //当前preNode.right的右子节点 currNode (temp) 的左子树为 null
    }
  }
  return res;
};

const morrisTraversal2 = function (root) {
  let curNode = root;
  let mostR = null;

  while (curNode) {
    mostR = curNode.left;
    if (mostR) {
      while (mostR.right && mostR.right != curNode) {
        mostR = mostR.right;
      }
      if (!mostR.right) {
        mostR.right = curNode;
        curNode = curNode.left;
        continue;
      } else {
        mostR.right = null;
      }
    }
    console.log(curNode.val);
    curNode = curNode.right;
  }
};

// Morris 前序遍历
const morrisTraversal = function (root) {
  let res = [];
  let curNode = root;
  while (curNode) {
    res.push(curNode.val);
    if (!curNode.left) {
      curNode = curNode.right;
    } else {
      // 找到左子树中最右子节点
      let preNode = curNode.left;
      while (preNode.right) {
        preNode = preNode.right;
      }
      // 此子节点的右节点设置为curNode.right，因为curNode已经输出了
      preNode.right = curNode.right;
      let tempNode = curNode;
      curNode = curNode.left;
      tempNode.left = null;
    }
  }
  return res;
};

// 层级遍历
const normalLevelOrder = function (root) {
  if (!root) return null;
  let list = [];
  list.push(root);

  let res = [];
  while (list.length > 0) {
    let node = list.shift();
    res.push(node.val);
    if (node.left) {
      list.push(node.left);
    }
    if (node.right) {
      list.push(node.right);
    }
  }
  return res;
};
```

可参考对应题目JavaScript解答：

[Inorder Traversal](./94.binaryTreeInorderTraversal.js)

[Preorder Traversal](144.binaryTreePreorderTraversal.js)

[Postorder Traversal](145.binaryTreePostorderTraversal.js)

[LevelOrder Traversal](102.binaryTreeLevelOrderTraversal.js)
