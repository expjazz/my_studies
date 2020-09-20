function insert(intervals, newInterval) {
  let i = 0;
  let r = [];
  if (intervals.length === 0) return [newInterval]
  
  
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
      r.push(intervals[i]);
      i += 1;
  }
  
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      i++
  }
  r.push(newInterval);
  
  while (i < intervals.length) {
      r.push(intervals[i])
      i += 1
  }
  
  return r
}