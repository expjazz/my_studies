function sum(arr, k) {
  let r = [];
  arr.sort((a, b) => a - b)
  let min = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let sum =  k - arr[left] + arr[right] + arr[i];
      if (sum === 0) {
        return [arr[i], arr[left], arr[right]]
      } else if (Math.abs(sum) < Math.abs(min)) {
        min = sum
        r = [arr[i], arr[left], arr[right]]
        }

        if (sum > 0) {
          left++
        } else {
          right--
        }
      }

    }
    return r
  }


console.log(sum([-3, -1, 1, 2], 1))