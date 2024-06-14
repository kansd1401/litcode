var MedianFinder = function () {
  this.maxH = new MaxPriorityQueue();
  this.minH = new MinPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num, { minH, maxH } = this) {
  const isFirst = maxH.isEmpty();
  const isGreater = maxH.front()?.element >= num;

  const heap = isFirst || isGreater ? maxH : minH;

  heap.enqueue(num);
  this.rebalance();
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.minH.size() === this.maxH.size()) {
    return (this.minH.front().element + this.maxH.front().element) / 2;
  } else {
    const heap = this.minH.size() > this.maxH.size() ? this.minH : this.maxH;
    return heap.front().element;
  }
};

MedianFinder.prototype.rebalance = function () {
  if (this.minH.size() > this.maxH.size()) {
    this.maxH.enqueue(this.minH.dequeue().element);
  }
  if (this.maxH.size() > this.minH.size() + 1) {
    this.minH.enqueue(this.maxH.dequeue().element);
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
