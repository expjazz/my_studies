function corruptPair(arr) {
  let i = 0;
  let r = [];
  while (i < arr.length) {
    let j = arr[i] - 1;

    if (arr[j] !== arr[i]) {
      [arr[j], arr[i]] = [arr[i], arr[j]]
    } else {
      i++;
    }
  }

  for (let x = 0; x < arr.length; x++) {
    if (arr[x] !== x + 1) {
      r.push(arr[x])
      r.push(x + 1)
    }
  }

  return r
}


console.log(corruptPair([3, 1, 2, 3, 6, 4]))