const maximumSumOfSubArrayK = (arr, k) => {
  let tempArr = [];
  let windowEnd = 0;
  let tempSum = 0;
  windowStart = 0;
  arr.forEach((ele, index) => {
    if (index < k) {
      tempSum += ele;
      windowEnd++;
    } else {
      tempArr.push(tempSum);
      tempSum -= arr[windowStart];
      windowStart++;
      tempSum += ele;
      if (index === arr.length - 1) tempArr.push(tempSum);
    }
  });
  return tempArr.reduce((a, b) => (a > b ? a : b));
};

console.log(maximumSumOfSubArrayK([2, 1, 5, 1, 3, 2], 3));
console.log(maximumSumOfSubArrayK([2, 3, 4, 1, 5], 2));
