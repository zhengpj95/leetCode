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
Given two strings s and t, return the minimum window in s which will contain all the characters in t.
If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window,
it is guaranteed that there will always be only one unique minimum window in s.

Constraints: 1 <= s.length, t.length <= 10^5; s and t consist of English letters.
```

给定两个字符串 `s`, `t`，我们需要在 `s` 中找出包含 `t` 的全部字符的最小子串，并返回此字符串。

题目中已经保证如果 `s` 中存在这样的子串，它是唯一的答案；题目中可以不保证这样唯一的子串，我们在代码中只返回第一个出现的字串即可。

以 `s = "ADOBECODEBANC", t = "ABC"` 为例，我们定义两个指针 *left*, *right*，其都指向字符串 s 的第一个字母。

1、*right* 指针不断向右移动，直到出现了子串中满足 `t`，此时子串是 `ADOBEC`，记录结果，此时指针未到末尾，还需继续操作；

2、开始移动 *left* 指针，其移动到下标 1 时，left 和 right 之间的子串已经不满足 `t`，此时 *right* 指针要开始右移；

3、当出现字串 `DOBECODEBA` 时，又满足的 `t` ，此时就需要移动 *left* 指针并与已记录的结果判断，是否比已记录的结果更小；在操作过程中，结果值不断变化，最后更新为 `CODEBA`；*left* 指针再往右移动，不满足条件；

4、开始 *right* 右移，直到其到达末尾，此时出现子串 `ODEBANC`，满足 `t` 情况；需要开始移动 *left* 指针，最后得到结果值 `BANC` 的最短字串。

在上述过程中，思路很简单易懂，但是主要关键点就在于 **如何判断 left 和 right 之间的子串是满足 t 且是最小的子串长度呢**。

思路一：我们可使用两个 map 来记录 `t` 和 *子串*，每移动一次 right 指针，我们就判断两个map的关系。但是这样的操作的时间复杂度达到 n*m (n=s.length, m = t.length)；显然这样的操作是可以的，但是会出现超时情况。
思路二：我们使用一个变量来记录子串是否满足 `t` 的每种字母及其数量。

```javascript
let valid = 0; //t 中字母的种类
while (right < s.length) {
  let char = s[right];
  // 当前字符在t中且数量相同
  if (char 在 t && char 的数量等于在 t 中数量) {
    valid++;
  }

  // 出现了满足 t 的子串
  while (valid == t 的种类) {
    // 更新结果

    // 缩小窗口
    let removeChar = s[left++]
    if (removeChar 在 t) {
      // 更新valid--
    }
  }
  right++;
}
```

完整代码附下：

```javascript
const minWindow = (s, t) {
  if (!t || !t.length || !s || !s.length || s.length < t.length)
    return '';

  let needMap = new Map();
  let windowMap = new Map();
  for (let i = 0; i < t.length; i++) {
    needMap.set(t[i], needMap.has(t[i]) ? needMap.get(t[i]) + 1 : 1);
    windowMap.set(t[i], 0);
  }

  let res = null;
  let valid = 0; //t的字母数量
  let left = 0,
      right = 0;

  // 右指针未到末尾
  while (right < s.length) {
    // 扩张窗口
    let addChar = s[right];
    right++;
    if (needMap.has(addChar)) {
      windowMap.set(addChar, windowMap.get(addChar) + 1);
      if (needMap.get(addChar) === windowMap.get(addChar)) valid++;
    }

    // 有满足条件的子字符串，开始收缩窗口，寻找最小字符串
    while (valid === needMap.size) {
      let str = s.slice(left, right);
      if (res === null || str.length < res.length) res = str;

      let removeChar = s[left];
      left++;

      // 这一步刚好和扩张窗口对称
      if (needMap.has(removeChar)) {
        if (needMap.get(removeChar) === windowMap.get(removeChar)) valid--;
        windowMap.set(removeChar, windowMap.get(removeChar) - 1);
      }
    }
  }
  return res === null ? '' : res;
};
```

## 4. 总结

滑动窗口，最重要的是 **判断什么时候开始右指针移动，什么时候开始左指针移动，什么时候更新结果**。滑动窗口问题，万变不离其宗，注意窗口的边界和窗口的内容即可。

（写完了，但是质量不高。仍需努力呀，争取写出越来越优秀的文章。）
