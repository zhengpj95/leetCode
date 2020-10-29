# Sliding Window

滑动窗口就是双指针的一种技巧，运用的就是双指针，但是仅能维持一个指针移动，另一个指针呆着不动。

当一个指针维持不动，另一个指针移动时，两个指针之间的部分就是一个窗口，这个窗口是不断的扩大和缩小的，直到末尾或找到结果。

简单思路就是：

1. *right* 指针不断向右扩张，直到出现满足条件的情况
2. 开始让 *left* 指针向右移动，一旦出现不满足条件的情况，就停止
3. 反复操作步骤1、2，直到右指针到末尾或退出循环

对于窗口移动，不是很难理解的事情，难点在于窗口扩大或缩小过程中，如何判断窗口内数据满足了条件。
如在做 LeetCode 的 76 题 Minimum Window Substring 时，我使用的是将窗口内的子字符串变成 Map，再去匹配，这样子就有两个 Map 要去匹配了，又是一个 for 循环判断，这样会耗时很大，用这种方法提交 LeetCode，直接判了 Time Limit Exceeded。

**套路模板：**

```javascript
let left = 0;
let right = 0;
let window;
while (right satisfy conditions) {
  // 扩大窗口
  window.add(xxx);
  right++;

  // 出现满足条件的情况，开始缩小窗口
  while or if (window meet conditions) {
    window.remove(xxx);
    left++;
  }
}
```

**窗口大小：** 分为固定和不固定的情况

1. 不固定大小：
   * *right* 指针开始右移，直到出现满足条件的情况
   * 然后 *left* 开始右移，直到出现不满足条件的情况
   * 不断重复上面的步骤，直到 *right* 指针到末尾
2. 固定大小：
   * 先开始移动 *right* 指针，直到窗口大小等于固定大小时
   * 当窗口大小等于固定大小时，就是要判断条件的时候
   * 然后开始同步移动 *right*、*left* 指针
   * 不断重复上面的步骤，直到 *right* 指针到末尾
