# 使用二叉堆 (Binary Heap) 来实现优先队列

二叉堆分为大堆，小堆。

- 大堆：每个节点都大于等于它的两个子节点
- 小堆：每个节点都小于等于它的两个子节点

优先队列中的元素不一定全部都是有序的，只要取出的数据符合在队列中的最大或最小即可。

二叉堆就是一种特殊的二叉树，完全二叉树，所以存储结构使用数组即可。

其中我们添加一个函数参数 `compare = (a, b) => a > b` 来控制升序还是降序。

使用二叉堆实现优先队列，最重要的是 **上浮** 和 **下沉** 两个方法，代码看下面实现，废话不多说。

下面用代码实现一下基于二叉堆的优先队列，其中数组从序号1的位置开始存储元素。

```javascript
class PriorityQueue {
  /**
   * 传入比较排序函数，默认从小到大排序输出
   * @param {Function} compare
   */
  constructor(compare = (a, b) => a > b) {
    this.count = 0;
    this.list = [];
    this.compare = compare;
  }

  isEmpty() {
    return this.count === 0;
  }

  getSize() {
    return this.count;
  }

  getTop() {
    return this.isEmpty() ? null : this.list[1];
  }

  getParent(k = 1) {
    return Math.floor(k / 2);
  }

  leftChildren(k = 1) {
    return k * 2;
  }

  rightChildren(k = 1) {
    return k * 2 + 1;
  }

  exchange(i, j) {
    if (i > this.count || j > this.count) return;
    let temp = this.list[i];
    this.list[i] = this.list[j];
    this.list[j] = temp;
  }

  doCompare(i, j) {
    return this.compare(this.list[i], this.list[j]);
  }

  /**
   * 上浮，从最后一位开始上浮，与父节点比较大小关系
   */
  swim(k = this.count) {
    while (k > 1 && this.doCompare(this.getParent(k), k)) {
      this.exchange(this.getParent(k), k);
      k = this.getParent(k);
    }
  }

  /**
   * 下沉，从top的位置开始下沉，与左右子节点比较大小关系
   */
  sink(k = 1) {
    while (this.leftChildren(k) <= this.count) {
      let max = this.leftChildren(k);
      if (this.rightChildren(k) <= this.count && this.doCompare(max, this.rightChildren(k))) {
        max = this.rightChildren(k);
      }
      if (this.doCompare(max, k)) break;
      this.exchange(k, max);
      k = max;
    }
  }

  /**
   * 插入到最后的位置，然后上浮到正确的位置
   * @param {any} ele
   */
  enqueue(ele) {
    this.list[++this.count] = ele;
    this.swim();
  }

  /**
   * 第一个位置和最后一个位置交换，删除最后一个位置，然后第一个位置下层到正确位置
   * @returns {any}
   */
  dequeue() {
    if (this.isEmpty()) return null;
    let max = this.list[1];
    this.exchange(1, this.count);
    this.list[this.count--] = null;
    this.sink();
    return max;
  }

  /**
   * 排序
   * @returns {any[]}
   */
  getSortedQueue() {
    let result = [];
    while (this.count > 0) {
      result.push(this.dequeue());
    }
    return result;
  }

  /**
   * @param {any[]} data
   */
  createHeap(data) {
    for (let i = 0; i < data.length; i++) {
      this.enqueue(data[i]);
    }
  }
}
```
