# LinkedList

## 1. 寻找链表中点

```javascript
// 使用双指针---快慢指针，当fast指针指向null时，slow指针就是中点位置
// 如果是偶数个结束，slow最终位置是中间偏右
let fast = head, slow = head;
while (fast && fast.next) {
  fast = fast.next.next;
  slow = slow.next;
}
return slow;
```

## 2. 寻找链表倒数第k个结点

```javascript
// 使用快慢指针，让fast指针先行k步，然后快慢指针开始同步前进，当fast指向null时，slow指针就是倒数第k个结点
let fast = head, slow = head;
while (k-- > 0 && fast) {
  fast = fast.next;
}

while (fast) {
  slow = slow.next;
  fast = fast.next;
}
return slow;
```

## 3. 判断链表是否有环，以及环的起始位置

```javascript
// 使用快慢指针，如果有环快指针会追上慢指针
let fast = head, slow = head;
while (fast && fast.next) {
  fast = fast.next.next;
  slow = slow.next;
  if (fast === slow) return true; //有环
}
return false;

// 假设快慢指针相遇时，slow指针走了k步，则fast指针行了2k步，即环的长度是k
// 设相遇点到环的起点距离为m，（此时快慢指针都在环内），则k-m就是环起点位置
// 让slow指针重新指向head，然后fast, slow指针同步前行，下次相遇时就是环的起点了，
// 因为fast指针第一次相遇点，其向前行进k-m步就到环的起点了。（画图理解）
let fast = head, slow = head;
while (fast && fast.next) {
  fast = fast.next.next;
  slow = slow.next;
  if (fast === slow) break;
}

slow = head;
while (fast !== slow) {
  fast = fast.next;
  slow = slow.next;
}
return fast;
```

## 4. 给定某个结点，删除此结点（不给链表头结点）

```javascript
// 我们常规操作就是从链表头开始遍历，找到待删除结点的前一结点，再进行删除结点操作，
// 但是此处不给链表第一个节点，即便如此，我们仍可以 O(1) 时间内完成
// 必须保证不是尾结点，若是则不行
node.val = node.next.val
node.next = node.next.next;
```

## 5. 链表逆转

```javascript
// 1.新建一个头结点
let dummyHead = new ListNode(0, head)
while (head && head.next) {
  let node = head.next;
  head.next = node.next;
  node.next = null

  node.next = dummyHead.next;
  dummyHead.next = node;
}
return dummyHead.next;

// 2.直接操作
let prev = null;
while (head) {
  let node = head.next;
  head.next = prev;
  prev = head;
  head = node;
}
return prev;

// 3.递归法
const reverseList = function (head) {
  if (!head || !head.next) return head;
  let p = reverseList(head.next)
  head.next.next = head;
  head.next = null;
  return p;
}

// 4.链表[a, b)逆转
const reverseList = function (head, tail) {
  let prev = null;
  while (head !== tail) {
    let nxt = head.next;
    head.next = prev;
    prev = head;
    head = nxt;
  }
  return prev;
}
```

## 6. 链表两两结点交换

```javascript
const swapPairs = function (head) {
  if (!head || !head.next) return head;
  let dummyHead = new ListNode(0); //添加头结点
  dummyHead.next = head;

  let curr = head;
  let head1 = dummyHead;
  let nextN = null;
  while (curr && curr.next) {
    nextN = curr.next;
    // 交换两结点
    curr.next = nextN.next;
    nextN.next = curr;

    head1.next = nextN;
    head1 = curr;
    curr = curr.next;
  }

  return dummyHead.next;
};
```
