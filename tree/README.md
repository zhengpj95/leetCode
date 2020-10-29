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
