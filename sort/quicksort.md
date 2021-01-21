# 快速排序算法

快速排序是对冒泡排序的一种改进。其基本思想就是基于分治法的：

在待排序表 L[1...n] 中任意取一个元素 pivot 作为基准值，通过一趟排序将待排序表划分为独立的两部分 L[1...k-1] 和 L[k+1...n]，

使得 L[1...k-1] 内所有的元素小于 pivot ，L[k+1...n] 内所有的元素大于或等于 pivot ，则 pivot 放在了最终位置 L[k] 上。

这个过程就是一趟快速排序。而后分别递归处理两个子表，直到每部分内只有一个元素或空为止，即所有的元素都放在了其最终位置上。

**所以问题转化成：怎么找这个基准值 pivot ，怎么将待排序表划分为独立的两部分呢？**

这个基准值，我们可以去排序表的第一个元素，也可以取中间的元素。

下面我们以第一个元素为基准值，来模拟一边快速排序算法。

假设我们的待排序表为 [18, 25, 85, 21, 25, 47, 15, 25, 68, 30, 12]

![QuickSort](https://gitee.com/zhengpj/imgdepot/raw/master/blog/quicksort.png)

第一趟排序如上图所示。

接下来我们对基准值 **18** 的左半部分 [12, 15] 重复上述排序，对于其右半部分 [21, 25, 47, 85, 25, 68, 30, 25] 同样进行上述排序，直到每一个部分都是一个元素或为空时才结束。

快速排序算法的思路大致就是这样：**定义基准值，根据基准值将待排序表划分为左右两部分，然后递归对这两部分进行重复，直至每一部分都是一个元素或为空时结束。**

将待排序表划分左右两部分的代码如下：

```javascript
/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function parition(nums, low, high) {
  let pivot = nums[low];//当前表的第一个元素这位基准值
  while (low < high) {
    while (low < high && nums[high] >= pivot) high--;
    nums[low] = nums[high]; //将比基准值小的移到左边
    while (low < high && nums[low] <= pivot) low++;
    nums[high] = nums[low];  //将比基准值大的移到右边
  }
  nums[low] = pivot; //基准值存放到最终位置
  return low; //返回最终位置，把待排序表划分左右两部分
}
```

既然划分的函数写好了，那么快速排序的算法就很好写了。

```javascript
/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
function quickSort(nums, low, high) {
  if (low >= high) return nums;
  let pos = parition(nums, low, high);
  quickSort(nums, low, pos - 1);
  quickSort(nums, pos + 1, high);
  return nums;
}
```

小结：

- 快速排序是递归的，所以需要一个递归栈。空间复杂度最坏情况下为 O(n)，平均情况为 O(logn)。
- 快速排序算法的时间复杂度为 O(nlogn)
- 快速排序算法是所有内部排序算法中平均性能最优的排序算法。
- 快速排序算法是部位顶的排序算法（相同的元素，在排序后其相对的位置可能会改变）

题外：

内部排序算法包括:

- 插入排序（直接插入排序、折半插入排序、希尔排序）
- 交换排序（冒泡排序、快速排序）
- 选择排序（简单选择排序、堆排序）
- 归并排序
- 基数排序
