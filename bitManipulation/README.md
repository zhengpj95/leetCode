# Bit Manipulation

## 1. 异或操作

```javascript
// 异或操作，对应的二进制位：相同为0，相异为1
// 给定一个非空数组，每个元素出现两次，除了一个，找出此数字
let res = 0;
for (let item of nums) {
  res ^= item;
}
return res;
```
