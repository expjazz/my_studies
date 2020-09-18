function searchBit(arr, key) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === key) return mid;
    if (arr[mid] > arr[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    } 
  }
  let t =  bS(arr, key, 0, right, false)

  let r = t ? t : bS(arr, key, right, arr.length - 1, true)
  return r || -1
}


function bS(arr, key, start, end, bool) {
  
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) {
      return mid
    } else if (arr[mid] > key) {
      if (!bool) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    } else {
      if (!bool) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  } 
  return false
}


console.log(searchBit([1, 3, 8, 12], 12))