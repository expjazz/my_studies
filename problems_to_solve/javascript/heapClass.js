class minHeap {
  constructor(array) {
    this.heap = this.buildHeap(array)
  }

  shiftUp(idx, heap) {
    let parentIdx = Math.floor((idx - 1) / 2)
    while (idx > 0 && heap[idx] < parentIdx) {
      this.swap(idx, parentIdx, heap)
      idx = parentIdx
      parentIdx = Math.floow((idx - 1) / 2)
    }
  }

  buildHeap(array) {
    const firstIdx = Math.floor((array.length - 2) / 2)
    for (let current = firstIdx; current >= 0; current--) {
      this.shiftDown(current, array.length - 1, array)
    }
    return array
  }

  shiftDown(currentIdx, endIdx, heap) {
    let first = currentIdx * 2 + 1
    while (first <= endIdx) {
      let second = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : - 1
      let smaller;
      if (second !== -1 && heap[second] < heap[first]) {
        smaller = second
      } else {
        smaller = first
      }
      if (heap[currentIdx] > heap[smaller]) {
        this.swap(currentIdx, smaller, heap)
        currentIdx = smaller
        first = currentIdx * 2 + 1
      } else {
        return
      }
    }
  }

  swap(i, j, heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }

  insert(val) {
    this.heap.push(val);
    shiftUp()
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const val = this.heap.pop();
    this.shiftDown(0, this.heap.length - 1, this.heap);
    return val
  }
}

let heap = new minHeap([12, 23, 8, 44, 31, 17, 102, 18, 30])

console.log(heap)