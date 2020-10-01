function numberRange(arr, key) {
  let first = helper(arr, key, false)
  let second = helper(arr, key, true)
  
  return [first, second]

}

function helper(arr, key, bool) {
  let start = 0
  let end = arr.length - 1
  let r = -1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] === key) {
      r = mid
      if (!bool) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    } else if (arr[mid] > key) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return r
}
console.log(numberRange([1, 3, 8, 10, 15], key = 12))