function cyclicSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      arr[i] = i + 1
    }
  }

  return arr
}

console.log(cyclicSort([2, 6, 4, 3, 1, 5]))