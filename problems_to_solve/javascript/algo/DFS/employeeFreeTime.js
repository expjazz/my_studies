function employee(arrOne, arrTwo) {
  let i = 0;
  let j = 0;

  while (i < arrOne.length && j < arrTwo.length) {
    let aInB = arrOne[i][0] >= arrTwo[j][0] && arrOne[i][0] <= arrTwo[j][1];
    let bInA = arrTwo[j][0] >= arrOne[i][0] && arrTwo[j][0] <= arrOne[i][1];


  }
}


console.log(employee([[[1,3], [5,6]], [[2,3], [6,8]]]))