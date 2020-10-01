function interview(arr, arr2) {
  let arr3 = []
  arr.forEach((ele) => {
    if (!arr2.includes(ele)) arr3.push(ele)
  
  })
  return arr3
}

console.log(interview([1, 3, 5, 6], [9, 8, 5, 6]))