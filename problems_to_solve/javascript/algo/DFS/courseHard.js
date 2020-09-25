function course(t, p) {
  let parentCount = new Array(t).fill(0);
  let graph = new Array(t).fill(0).map(() => new Array);

  p.forEach((edge) => {
    let parent = edge[0];
    let child = edge[1];

    graph[parent].push(child);

    parentCount[child] += 1;
  })

  let queue = [];

  for (let i = 0; i < parentCount.length; i++) {
    if (parentCount[i] === 0) {
      queue.push(i)
    }
  }

  let r = [];
  while (queue.length) {
    let vertex = queue.shift();
    r.push(vertex);
    graph[vertex].forEach((node) => {
      parentCount[node] -= 1;
      if (parentCount[node] === 0) {
        queue.push(node)
      }
    })
  }

  return r

}


console.log(course(4, [[3, 2], [3, 0], [2, 0], [2, 1]]))