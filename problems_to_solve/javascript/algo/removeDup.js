const removeDup = (arr) => {
  let nonDuplicate = 1;
  let i = 1;
  while (i < arr.length) {
    if (arr[nonDuplicate - 1] !== arr[i]) {
      arr[nonDuplicate] = arr[i];
      nonDuplicate++;
    }
    i++
  }
  return nonDuplicate

}

const swap = (one, two, arr) => {
  const temp = one;
  arr[one] = arr[two];
  arr[two] = temp;
}

console.log(removeDup([2, 2, 2, 11]))