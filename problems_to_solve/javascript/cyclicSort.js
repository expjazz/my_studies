function cyclic(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = arr[i] -  1
    if (arr[j] !== arr[i]) {
      [arr[j], arr[i]] = [arr[i], arr[j]]
    }

  }
  return arr
}

console.log(cyclic([3, 1, 5, 4, 2]))