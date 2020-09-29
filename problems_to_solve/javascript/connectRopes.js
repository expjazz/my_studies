function connectRopes(arr) {
  let heap = [];
  let half = arr.length
  for (let i = 0; i < arr.length; i++) {
    heap.push(arr[i])
    if (i > 0) shiftUp(i, heap)
  }
  let r = []

  while (heap.length > 1) {
    let k = 2
    let s = 0
    while (k) {

      swap(0, heap.length - 1, heap)
      s += heap.pop()
      shiftDown(0, heap.length - 1, heap)
      k -= 1
    }
    r.push(s)

    heap.push(s)
    shiftUp(heap.length - 1, heap)
  }

  return r.reduce((a, b) => a + b)

}

console.log(connectRopes([1, 3, 11, 5]))

function shiftDown(current, end, arr) {
  let first = current * 2 + 1
  while (first <= end) {
    let second = current * 2 + 2 <= end ? current * 2 + 2 : -1
    let greater;
    if (second !== -1 && arr[second] < arr[first]) {
      greater = second
    } else {
      greater = first
    }

    if (arr[current] > arr[greater]) {
      swap(current, greater, arr)
      current = greater 
      first = current * 2 + 1
    } else {
      return;
    }
  }
}

function shiftUp(current, arr) {
  let parent = Math.floor((current - 1) / 2)
  while (arr[current] < arr[parent]) {
    swap(current, parent, arr)
    current = parent 
    parent = Math.floor((current - 1) / 2)
  }
}

function swap(one, two, arr) {
  let temp = arr[one]
  arr[one] = arr[two]
  arr[two] = temp
}