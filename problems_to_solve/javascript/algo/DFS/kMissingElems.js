function kMissing(arr, k) {
  let i = 0;
  let n = arr.length;
  let r = [];
  while (i < n) {
    let j = arr[i] - 1;

    if (arr[i] > 0 && arr[i] <= n && arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
    } else {
      i++
    }

  }
    for (let x = 0; x < n; x++) {
      if (arr[x] !== x + 1) {
        if (k) {
          r.push(x + 1);
          k -= 1
        }
      }
  }

  while (k) {
    r.push(1000)

    k -= 1;
  }
  console.log(arr)
  return r
}


console.log(kMissing([4, 10, 6, 1, 2, 3, 100, 8], 8))