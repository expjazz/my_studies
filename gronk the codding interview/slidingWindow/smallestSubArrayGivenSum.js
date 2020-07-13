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
  return tempArr.reduce((a, b) => (a[1] < b[1] ? a : b))[1];
};

console.log(smallestSubArrayGivenSum([2, 1, 5, 2, 8], 7));
