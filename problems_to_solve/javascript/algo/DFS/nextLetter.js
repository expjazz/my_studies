function next(arr, key) {

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] === key) {
      if (mid + 1 > arr.length - 1) {
        return arr[0]
      } else {
        return arr[mid + 1]
      }
    }
    if (arr[mid] < key) start = mid + 1;
    if (arr[mid] > key) end = mid - 1;

  }
  console.log(start)

  return arr[start] || arr[0]
}


console.log(next(['b', 'c', 'f', 'h'], 'a'))