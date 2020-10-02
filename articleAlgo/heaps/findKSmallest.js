function kSmall(arr, k) {
  let heap = []
  for (let i = 0; i < k; i++) {
    heap.push(arr[i])
    shiftUp(i, heap)
  }

  for (let i = k; i < arr.length; i++) {
    if (arr[i] > heap[0]) continue 
    heap.push(arr[i])
    swap(heap, 0, heap.length - 1)
    heap.pop()
    shiftDown(0, heap.length - 1, heap)
  }

  return heap[0]
  
}

function shiftUp(current, heap) {
  let parent = Math.floor((current - 1) / 2)
  while (parent >= 0 && heap[current] > heap[parent]) {
      swap(heap, current, parent)
      current = parent 
      parent = Math.floor((current - 1) / 2)
  }
}

function shiftDown(current, end, heap) {
  let first = current * 2 + 1
  while (first <= end) {
    let t = current * 2 + 2 
    let second = t <= end ? t : -1
    let greatest;
    if (second !== -1 && heap[second] > heap[first]) {
      greatest = second 
    } else {
      greatest = first
    }

    if (heap[greatest] > heap[current]) {
      swap(heap, greatest, current)
      current = greatest 
      first = current * 2 + 1
    } else {
      return 
    }
  }
}

function swap(arr, one, two) {
  [arr[one], arr[two]] = [arr[two], arr[one]]
}

console.log(kSmall([5, 12, 11, -1, 12], K = 3))