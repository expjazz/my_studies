function smallest(arr, s) {
  let first = 0;
  let second = 0;
  let r = Infinity;
  let sum = arr[first]

  while (second < arr.length) {
    if (sum < s) {
      second += 1;
      sum += arr[second]
    } else {
      r = Math.min(r, second - first + 1)
      if (first === second) {
        second += 1;
      }
      sum -= arr[first]
      first += 1;
    }

  }
  return r
}

console.log(smallest([3, 4, 1, 1, 6], 8 ))