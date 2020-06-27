function birthdayCakeCandles(ar) {
  console.log(ar);
  let a = 0;
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] >= a) {
      a = ar[i];
    }
  }
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] >= a) {
      count += 1;
    }
  }
  return count;
}
