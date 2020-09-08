const fruitsBasket = (arr) => {
  let first = 0;
  let second = 0;
  let max = 0;
  const hash = {};
  while (second < arr.length) {
    const fruit = arr[second];
    if (!hash[fruit]) hash[fruit] = 0;
    hash[fruit] += 1;
    while (Object.keys(hash).length > 2) {
      const letter = arr[first];
      hash[letter] -= 1;
      if (hash[letter] === 0) delete hash[letter];
      first += 1;
    }
    second += 1;
    max = Math.max(max, second - first) 
  }
  return max

  //add fruints to baskets; if I have more than 2 types; remove one; add first poinnter; so Im in the legal zone
}

console.log(fruitsBasket(['A', 'B', 'C', 'B', 'B', 'C']))
