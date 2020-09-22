function findDups(arr) {
  let i = 0;
  let r = [];
  while(i < arr.length) {
    let j = arr[i] - 1;
    if (arr[j] !== arr[i]) {
      [arr[j], arr[i]] = [arr[i], arr[j]]
    } else {
      i++
    }
  }

  for (let x = 0; x < arr.length; x++) {
    if (arr[x] !== x + 1) {
      r.push(x + 1)
    }
  }
  return r
}

console.log(findDups([2, 3, 1, 8, 2, 3, 5, 1]))