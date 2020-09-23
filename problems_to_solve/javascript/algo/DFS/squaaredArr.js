function square(arr) {
  let negative = 0;
  let positive = arr.length - 1;
  let r = [];

  while (negative <= positive) {
    let positiveNum = arr[positive];
    let negativeNum = arr[negative];
    if (Math.abs(positiveNum) > Math.abs(negativeNum)) {
      r.unshift(positiveNum * positiveNum)
      positive -= 1;
    } else {
      r.unshift(negativeNum * negativeNum)
      negative += 1;
    }
  }
  return r
}

console.log(square([-3, -1, 0, 1, 2]))

