function bitonic(arr) {
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    let mid = Math.floor((start + end ) / 2)
    if (mid < arr.length - 1 && arr[mid] < arr[mid + 1]) {
      start = mid + 1
    } else {
      end = mid
    }

  }
  return arr[start]
}

console.log(bitonic([1, 3, 8, 12, 4, 2]))