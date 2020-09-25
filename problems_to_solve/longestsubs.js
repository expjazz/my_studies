function longest(str, k) {
  let first = 0;
  let count = 0;
  let r = 0;
  let hash = {};

  for (let second = 0; second < str.length; second++) {

    let end = str[second];
    if (!hash[end]) {
      hash[end] = 0;
    }
    hash[end] += 1;
    if (Object.keys(hash).length > 1) {
      count += 1
    }
    while (Object.keys(hash).length > 1 && count > k) {
      let start = str[first];
      hash[start] -= 1;
      if (hash[start] === 0) delete hash[start]
      first += 1;

    }
    r = Math.max(r, second - first + 1)
  }
  return r
}

console.log(longest("aabccbb", k=2))