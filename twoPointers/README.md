# Two Pointers

双指针可分为 **快慢指针**， **左右指针** 和 **滑动窗口**。

## 快慢指针常见用法

### 1. 快慢指针判断有环(Floyd's Tortoise and Hare (Cycle Detection))

```javascript
// 287. Find the Duplicate Number 和 142. Linked List Cycle II 这两道题都用到了此算法思想
// 首先使用一快一慢指针，快指针2步一次，慢指针一次一步，当快指针到末尾或者找到快慢指针相等时退出第一次循环
// 这一次循环找到的是相遇点，但不一定是环的起点
let fast = head;
let slow = head;
while (fast && fast.next) {
  fast = fast.next.next;
  slow = slow.next;
  if (fast === slow) break;
}

// 假设慢指针走了 k 步，则快指针走了 2k 步，此时可知环的长度就是 k 步。
// 假设慢指针距离环的起点为 m 步，则让慢指针从头开始走到 k - m 步时就是环的起点了，
// 此时快指针从相遇点重新走 k - m 步则也到了环的起点，此时快慢指针都到了环的起点（如果有环的话）
slow = head;
while (slow !== fast) {
  fast = fast.next;
  slow = slow.next;
}
```

参考题目：

[287. Find the Duplicate Number](./287.findtheDuplicateNumber.js)

[142. Linked List Cycle II](../linkedList/142.linkedListCycle2.js)

### 2. 链表的中点

使用快慢指针，快指针一次两步，慢指针一一步，当快指针到达链表尾时，慢指针就处于链表的中间位置，或者是中间偏右的位置（偶数个结点）

```javascript
while (fast !== null && fast.next !== null) {
  fast = fast.next.next;
  slow = slow.next;
}
// 此时 slow 就处于中间位置或中间偏右位置
// 我们可以加多一个 preSlow 来记录 slow 的前一个位置，以便操作
```

### 3. 寻找链表的倒数第k个元素

这里是让快指针先行 k 步，然后快慢指针同时同步前进。当快指针到达指针末尾时，慢指针就是倒数第k个元素了。

```javascript
while (k-- > 0) {
  fast = fast.next;
}

while (fast !== null) {
  fast = fast.next;
  slow = slow.next;
}
// 此时 slow 就是倒数第k个元素
```

## 左右指针常见用法

### 1. 二分查找

```javascript
// 基础的二分查找
const binarySearch = (nums, target) => {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
  }
  return -1;
}
```

### 2. 反转数组

```javascript
let left = 0, right = nums.length - 1;

while (left <= right) {
  [nums[left], nums[right]] = [nums[right], nums[left]];
  left++;
  right--;
}
```

## 滑动窗口

滑动窗口是双指针的高级应用了，可参考：

[滑动窗口思想](../summary/slidingWindow.md)

[滑动窗口解题技巧](../slidingWindow/README.md)