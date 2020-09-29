function sum(arr, k) {
  let count = 0;
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length - 2; i++) {
    let first = i + 1;
    let second = i + 2;
    while (second < arr.length) {
      let sum = arr[i] + arr[first] + arr[second]
      if (first === arr.length - 2) return count;
      if (sum > k) {

        second -= 1;
        first += 1
      } else {
        count += 1
        second += 1
      }
    }
  }
  return count
}

console.log(sum([-1, 4, 2, 1, 3], 5  ))