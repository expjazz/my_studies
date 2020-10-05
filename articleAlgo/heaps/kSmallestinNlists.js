function kSmall(lists, k) {
  let heap = []
  for (arr of lists) {
    arr.forEach((num) => {
      heap.push(num)
      shiftUp(heap, heap.length - 1)

    })
  }
  let t = 0
  while (k > 0) {
    swap(0, heap.length - 1, heap)
    t = heap.pop()
    shiftDown(0, heap.length - 1, heap)  
    k -= 1
  }

  return t
}

function shiftDown(currentIdx, endIdx, heap) {
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
      swap(currentIdx, smaller, heap)
      currentIdx = smaller
      first = currentIdx * 2 + 1
    } else {
      return
    }
  }
}


const shiftUp = (heap, idx) => {
  let parent = Math.floor((idx - 1) / 2)

  while (parent >= 0 && heap[idx] < heap[parent]) {
    swap(idx, parent, heap)
    idx = parent 
    parent = Math.floor((idx - 1) / 2)
  }
} 

const swap = (one, two, arr) => {
  [arr[one], arr[two]] = [arr[two], arr[one]]
}

console.log(kSmall([[5, 8, 9], [1, 7]], 3))

