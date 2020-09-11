var moveZeroes = function(nums) {
  function swap(one, two, nums) {
      const tempt = nums[one];
      nums[one] = nums[two];
      nums[two] = tempt
  }
  
  let first = 0;
  let second = 1;
  while (first < nums.length - 1) {
      if (nums[second] === 0) {
          console.log(second);
          second += 1;
      }

      if (nums[first] === 0) swap(first, second, nums)
      first++;
      if (second < nums.length - 1) second++
  }
  return nums
};

console.log(moveZeroes([0,1,0,3,12]))