# Two Pointers

双指针可分为 **快慢指针**， **左右指针** 和 **滑动窗口**。

## 1. 快慢指针判断有环(Floyd's Tortoise and Hare (Cycle Detection))

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
