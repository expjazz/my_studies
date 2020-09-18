function minDiff(arr, target) {
  return helper(arr, target)
}

function helper(arr, target) {
  let x = Infinity;
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (Math.abs(target - x) > Math.abs(target - arr[mid])) {
      x = arr[mid];
    }
    if (arr[mid] < target) {
      start = mid + 1
    } else if (arr[mid] > target){
      end = mid - 1
    } else {
      return arr[mid]
    }
    
  }
  return x
}




console.log(minDiff([4, 6, 10], 17))