function meeting(intervals) {
  let temp = [];
  let start = intervals[0][0];
  let end = intervals[0][1];
  let count = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (start <= intervals[i][0] && end > intervals[i][1]) {
      temp.push(intervals[i])
      count = Math.max(count, temp.length)
    }

    if (end < intervals[i][0]) {
      temp.unshift();
      start = temp[0][0];
      end = temp[0][1]
    }
  }
  return count
}

console.log(meeting([[1,4], [2,5], [7,9]]))