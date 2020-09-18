function min(arr, key) {
  return helper(arr, key)
}

function helper(arr, key) {
  let difference = Infinity;
  let start = 0;
  let end = arr.length - 1;
  let mid = Infinity
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1
    }

  }
  if (arr[mid + 1] - key > arr[mid - 1] - key ) 
  
}

console.log(min([4, 5, 6, 8, 10, 88, 99, 129], 7))