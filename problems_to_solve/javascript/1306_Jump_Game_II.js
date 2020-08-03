const canReach = (arr, start) => {
  if (arr[start] === 0) return true;
  let queue = [arr[start]];
  let visited = [];
  let rightCicle = false;
  let leftCycle = false;

  while (queue.length > 0) {
      let temp = queue.shift();
      if (visited.includes(temp - arr[temp])) leftCycle = true;
      if (visited.includes(temp + arr[temp])) rightCicle = true;
      if (rightCicle && leftCycle) break;
      let leftChild = arr[temp - arr[temp]];
      visited.push(temp-arr[temp]);
      let rightChild = arr[temp + arr[temp]];
      visited.push(temp + arr[temp])
      if (leftChild === 0 || rightChild === 0) {
          return true
      } else {
          if (leftChild !== undefined) queue.push(leftChild);
          if (rightChild !== undefined) queue.push(rightChild);
      }
  }
  return false
};

console.log(canReach([0,3,0,6,3,3,4], 6))
