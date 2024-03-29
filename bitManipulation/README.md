# Bit Manipulation

## 1. 异或操作

异或操作是相对于二进制而言的，`0^1=1, 0^0=0, 1^1=0`

扩展开来就有：`0^a=a, a^a=0, a^b^b=a`

对于任意数字，将其变成二进制，再运用 **相同为0，相异为1** 规则，就可以得到异或结果。

[LeetCode 136. Single Number](https://leetcode.com/problems/single-number/)

```javascript
// 异或操作，对应的二进制位：相同为0，相异为1
// 给定一个非空数组，每个元素出现两次，除了一个，找出此数字
let res = 0;
for (let item of nums) {
  res ^= item;
}
return res;
```

## 2. 返回一个数有多少个二进制位 "1"

[LeetCode 191. Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/)

求一个数的二进制有多少个1，对于每一位只要让其与1相与不为0即可，那么如何方便的找出每一位呢，那显示是 2^0, 2^1, 2^2, ... 这样我们就能找出每一位了。

```javascript
let result = 0;
let bit = 1;
for (let i = 0; i < 32; i++) {
  if (n & bit) {
    result++;
  }
  bit <<= 1; // bit *= 2;
}
return result;
```

对于这道题还有另一个方式，那就是不断的 **n = n & (n-1)**，当n未等于0时，那证明n中还有1。

```text
对于 n = 8，有
8 & 7 => 0b1000 & 0b0111 => 0b0000
此时n已经为0了，不需要继续，那么对于n=8，有1位二进制位'1'

对于 n = 7，有
7 & 6 => 0b0111 & 0b0110 => 0b0110
6 & 5 => 0b0110 & 0b0101 => 0b0100
4 & 3 => 0b0100 & 0b0011 => 0b0000
此时n为0，不再继续，对于n=7，有3位二进制位'1'
```

```javascript
let result = 0;
while (n != 0) {
  result++;
  n = n & (n - 1);
}
return result;
```
