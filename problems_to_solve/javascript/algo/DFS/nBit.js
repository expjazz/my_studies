var singleNumber = function(nums) {
  let x1 = 0;
  for (let i = 0; i < nums.length; i++) {
      x1 = x1 ^ nums[i]
  }

  return x1
};