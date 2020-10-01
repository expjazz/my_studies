function ceiling(arr, key) {
  let start = 0
  let end = arr.length - 1
  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] === key) {
      return mid
    } else if (arr[mid] > key) {
      end = mid - 1
    } else {
      start = mid + 1
    }

  }
  if (arr[start] < key) return -1
  return start

}

console.log(ceiling([1, 3, 8, 10, 15], key = 12))