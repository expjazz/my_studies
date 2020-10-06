function cycle(arr) {
  let graph = gen(arr)
  let memo = {}
  let queue = [arr[0]]
  while(queue.length) {
    let node = queue.shift()
    if (memo[node] !== undefined) {
      return true
    } else {
      memo[node] = true
    }

    for (const child of graph[node]) {
      queue.push(child)
    }
  }

  return false
}

console.log(cycle(['eve', 'eat', 'ripe', 'tear']))

function gen(arr) {
  let graph = {}
  for (let i = 0; i < arr.length; i++) {
    graph[arr[i]] = []
    for (let j = 0; j < arr.length; j++) {
      if (j === i) {
        continue
      }
      if (arr[i][arr[i].length - 1] === arr[j][0]) {
        graph[arr[i]].push(arr[j])
      }
    }
  }
  return graph
}