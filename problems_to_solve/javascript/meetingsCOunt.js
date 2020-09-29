function meetings(arr) {
  let maxCount = -Infinity
  arr.sort((a, b) => a[0] - b[0])
  let start = arr[0][0]
  let end = arr[0][1]
  for (let i = 1; 1 < arr.length; i++) {
    let minCount = 1
    while (i < arr.length - 1 && arr[i][0] <= end) {
      start = Math.max(start, arr[i][0])
      end = Math.min(end, arr[i][1])
      minCount += 1;

      i += 1
    }
    maxCount = Math.max(maxCount, minCount)
  }
  return maxCount
}

console.log(meetings([[1,4], [2,5], [7,9]]))