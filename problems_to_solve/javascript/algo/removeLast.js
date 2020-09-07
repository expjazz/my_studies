const removeLast = (arr) => {
    console.log(nums);
    const swap = (one, two, arr) => {
        const temp = arr[one];
        arr[one] = arr[two];
        arr[two] = temp;
    }
    let first = 0;
    let second = 1;
    while (second < nums.length) {
    if (nums[first] !== 0) first += 1;

    if (nums[second] !== 0 && nums[first] === 0) {
        swap(first, second, nums)
        first += 1
    }
    second += 1
  }
 return nums
}