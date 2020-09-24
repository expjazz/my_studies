function longSubsSame(str, k) {
  let hash = {};

  let first = 0;

  let count = 0;
  let r = -Infinity
  for (let second = 0; second < str.length; second++) {
    console.log(count)
    let right = str[second];
    if (!hash[right]) {
      hash[right] = 0;
    }
    hash[right] += 1;
    count = Math.max(count, hash[right]);

    if ((second - first + 1 - count) > k) {
      let left = str[first];
      hash[left] -= 1;
      first += 1;
    }
    console.log(str.split('').slice(first, second).join(""))

    r = Math.max(r, second - first + 1)
  }
  console.log(hash)
  return r
}

console.log(longSubsSame("aabccbb", 2))