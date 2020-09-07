const helper = (left, right) => {
  const sorted = new Array((left.length + right.length));
  let k = 0;
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted[k] = left[i];
      i += 1;
    } else {
      sorted[k] = right[j];
      j += 1;
    }
    k += 1;
  }
  while (i < left.length) {
    sorted[k] = left[i];
    i += 1;
    k += 1;
  }
  while (i < right.length) {
    sorted[k] = left[j];
    j += 1;
    k += 1;
  }
};

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return helper(mergeSort(left), mergeSort(right));
};
