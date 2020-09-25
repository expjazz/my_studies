function fruits(array) {
  let r = -Infinity;
  let first = 0;
  let hash = {};
  for (let second = 0; second < array.length; second++) {
    let end = array[second];
    if (!hash[end]) {
      hash[end] = 0;
    }
    hash[end] += 1;

    while (Object.keys(hash).length > 2) {
      let start = array[first];
      hash[start] -= 1;
      if (hash[start] === 0) delete hash[start];
      first += 1;
    }


    r = Math.max(r, second - first + 1)
  }

  return r

}

console.log(fruits(['A', 'B', 'C', 'B', 'B', 'C']))