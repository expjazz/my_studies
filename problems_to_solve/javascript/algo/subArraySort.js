function subArraySort(nums) => {
      function isOut(i, num, nums) {
        if (i === 0) return num > nums[i + 1];
        if (i === nums.length - 1) return num < nums[i - 1];
        return num > nums[i + 1] || num < nums[i - 1]    
    }
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (isOut(i, num, nums)) {
            min = Math.min(num, min);
            max = Math.max(num, max);
        }
    }
    if (min === Infinity) return 0;
    let left = 0;
    while (nums[left] < min) left ++;
    let right = nums.length - 1;
    while (nums[right] > max) right--;
    return right - left + 1
}