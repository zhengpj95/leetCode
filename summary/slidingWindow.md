# Sliding Window

滑动窗口就是双指针的一种技巧，运用的就是双指针，但是仅能维持一个指针移动，另一个指针呆着不动。

当一个指针维持不动，另一个指针移动时，两个指针之间的部分就是一个窗口，这个窗口是不断的扩大和缩小的，直到末尾或找到结果。

## 1. 思路

简单思路就是：

1. *right* 指针不断向右扩张，直到满足限制的条件
2. 开始让 *left* 指针向右移动，直到不满足限制的条件，此时重回第一步移动 *right* 指针
3. 反复操作步骤1、2，直到右指针到末尾或退出循环

对于窗口移动，不是很难理解的事情，难点在于窗口扩大或缩小过程中，如何判断窗口内数据满足了条件。
如在做 LeetCode 的 76 题 Minimum Window Substring 时，我使用的是将窗口内的子字符串变成 Map，再去匹配，这样子就有两个 Map 要去匹配了，又是一个 for 循环判断，这样会耗时很大，用这种方法提交 LeetCode，直接判了 Time Limit Exceeded。

## 2. 套路模板

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

## 3. 以题讲解

我们以 LeetCode 的 *76. Minimum Window Substring* 题目来讲解 **滑动窗口** 的思路。

```text
Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

Constraints: 1 <= s.length, t.length <= 10^5; s and t consist of English letters.
```

给定两个字符串 `s`, `t`，我们需要在 `s` 中超出包含 `t` 的全部字符的最小子串，并返回此字符串。

题目中已经保证如果 `s` 中存在这样的子串，它是唯一的答案；题目中可以不保证这样唯一的子串，我们在代码中只返回第一个出现的字串即可。

## 4. 总结
