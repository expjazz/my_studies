const longestMountain = function(A) {
  let longest = 0;
  let i = 1;
  while (i < A.length - 1) {
      let isPeak = A[i - 1] < A[i] && A[i] > A[i + 1];
      if (!isPeak) {
          i++;
          continue
      }
      let left = i - 2;
      while (left >= 0 && A[left] < A[left + 1]) {
          left--;
      }
      let right = i + 2;
      while (right < A.length && A[right] < A[right - 1] ) {
          right += 1;
      }
      
      const max = right - left - 1;
      longest = Math.max(longest, max);
      i = right
      
  }
  return longest
    
};
console.log(longestMountain([2,1,4,7,3,2,5]))