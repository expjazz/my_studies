

const topological = (v, e) => {
  let parentCount = new Array(v).fill(0);
  let children = new Array(v).fill(0).map(() => new Array);
  let r = []
  e.forEach((edge) => {
      let parent = edge[0];
      let child = edge[1];
      children[parent].push(child);
      parentCount[child] += 1
  });

  let heads = [];

  for (let i = 0; i < parentCount.length; i++) {
      if (parentCount[i] === 0) {
          heads.push(i)
      }
  }

  while (heads.length) {
      let vertex = heads.shift();
      r.push(vertex);
      children[vertex].forEach((child) => {
          parentCount[child] -= 1;
          if (parentCount[child] === 0) {
              heads.push(child)
          }
      })
  }
  if (r.length !== v) {
      return false
  }

  return r

}


console.log(topological(7, [[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]]))

