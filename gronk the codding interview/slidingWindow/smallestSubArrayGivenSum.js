const smallestSubArrayGivenSum = (arr, S) => {
  let sum = 0;
  let tempArr = [];
  let count = 0;
  arr.forEach((ele, index) => {
    sum = 0;
    for (let i = index; i < arr.length; i++) {
      sum += arr[i];
      if (sum >= S) {
        tempArr.push([sum, arr.slice(index, i + 1).length]);
        sum = 0;
        return;
      }
    }
  });
  if (tempArr.length === 0) return 0;
  return tempArr.reduce((a, b) => (a[1] < b[1] ? a : b))[1];
};

const smallestOptimal = (arr, S) => {
  let sum = 0;
  let minLength = Infinity;
  let windowStart = 0;
  arr.forEach((ele, windowEnd) => {
    sum += ele;
    if (sum >= S) {
      minLength = Math.min(
        minLength,
        arr.splice(windowStart, windowEnd + 1).length
      );
      sum -= arr[windowStart];
      windowStart++;
    }
  });
  if (minLength === Infinity) return 0;
  return minLength;
};

// console.log(smallestSubArrayGivenSum([3, 4, 1, 1, 6], 8));
console.log(smallestOptimal([3, 4, 1, 1, 6], 8));
