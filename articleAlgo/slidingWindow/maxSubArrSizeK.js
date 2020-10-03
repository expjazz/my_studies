function maxSub(arr, k) {
  let first = 0
  let second = 1
  let sum = arr[first]
  while (second < k) {
    sum += arr[second]
    
    second += 1
  }
  second -= 1
  
  let r = sum
  while (second < arr.length - 1) {
    sum -= arr[first]
    first += 1
    second += 1
    sum += arr[second]
    r = Math.max(sum, r)
  }
  return r
}


console.log(maxSub([2, 3, 4, 1, 5], k=2 ))