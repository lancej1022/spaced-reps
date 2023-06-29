class Heap {
  constructor(array, compare) {
    this.compare = compare;
    this.heap = this.buildHeap(array);
    this.length = this.heap.length;
  }

  buildHeap(array) {
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i -= 1) {
      this.siftDown(i, array);
    }
    return array;
  }

  siftDown(parentIndex, heap) {
    const end = heap.length - 1;
    let childOneIndex = parentIndex * 2 + 1;
    while (childOneIndex <= end) {
      let childTwoIndex = parentIndex * 2 + 2 <= end ? parentIndex * 2 + 2 : -1;
      let indexToSwap;
      if (childTwoIndex !== -1 && this.compare(heap[childTwoIndex], heap[childOneIndex])) {
        indexToSwap = childTwoIndex;
      } else {
        indexToSwap = childOneIndex;
      }

      if (this.compare(heap[indexToSwap], heap[parentIndex])) {
        this.swap(parentIndex, indexToSwap, heap);
        parentIndex = indexToSwap;
        childOneIndex = parentIndex * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (parentIndex >= 0 && this.compare(this.heap[index], this.heap[parentIndex])) {
      this.swap(index, parentIndex, this.heap);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  insert(val) {
    this.heap.push(val);
    this.siftUp(this.heap.length - 1);
    this.length += 1;
  }

  remove(val) {
    let returnVal;
    if (val !== undefined) {
      this.heap.splice(this.heap.indexOf(val), 1);
    } else {
      this.swap(0, this.heap.length - 1, this.heap);
      returnVal = this.heap.pop();
    }
    this.siftDown(0, this.heap);
    this.length -= 1;
    return returnVal;
  }

  peek() {
    return this.heap[0] || null;
  }

  swap(i, j, heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}
