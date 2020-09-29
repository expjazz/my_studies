function kSmall(arr, k) {
  let max = [arr[0]]
  for (let i = 1; i < k; i++) {
    max.push(arr[i])
    shiftUp(i, max)
  }
  for (let i = k; i < arr.length; i++) {
    if (arr[i] > max[0]) continue;
    max.push(arr[i])
    swap(0, max.length - 1, max)
    max.pop()
    shiftDown(0, max.length - 1, max)
  }
  return max[0]
}

console.log(kSmall([5, 12, 11, -1, 12], K = 3))

function shiftDown(current, end, arr) {
  let first = current * 2 + 1
  while (first <= end) {
    let second = current * 2 + 2 <= end ? current * 2 + 2 : -1
    let greater;
    if (second !== -1 && arr[second] > arr[first]) {
      greater = second
    } else {
      greater = first
    }

    if (arr[current] < arr[greater]) {
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
  while (arr[current] > arr[parent]) {
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