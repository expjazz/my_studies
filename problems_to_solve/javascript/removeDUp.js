var removeDuplicates = function(nums) {
    
  let one = 0;
  let two = 0;
  count = 0;
  
  while (two < nums.length - 1) {
      console.log(two)
      two += 1;
      while (nums[one] === nums[two] && two <= nums.length - 1) {
          console.log('a')
          count += 1;
          two += 1;
      } one = two
  }
  return nums.length - count
};

console.log(removeDuplicates([0, 0, 0, 0, 0, 0, 7]))