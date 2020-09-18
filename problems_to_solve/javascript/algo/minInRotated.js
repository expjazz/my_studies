var findMin = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  let pivot = nums[end]
  while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2)
      let m = nums[mid]
      let s = nums[start]
      let e = nums[end]
      
      if (m > pivot) {
          start = mid + 1;
      } else if (m <= pivot && (mid === 0 || m < nums[mid - 1])) {
          return m
      } else {
          end = mid - 1
      }
      
  }
  return -1
};