const fruitBaskets = (arr) => {
  let windowStart = 0;
  let result = 0;
  let basket = {};
  const fruitSpecies = 2;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    const leftChar = arr[windowEnd];
    if (!basket[leftChar]) basket[leftChar] = 0;
    basket[leftChar] += 1;
    while (Object.keys(basket).length > fruitSpecies) {
      const rightChar = arr[windowStart];
      basket[rightChar] -= 1;
      if (basket[rightChar] === 0) delete basket[rightChar];
      windowStart += 1;
    }
    result = Math.max(result, windowEnd - windowStart + 1);
  }
  return result;
};

console.log(fruitBaskets(["A", "B", "C", "A", "C"]));

console.log(fruitBaskets(["A", "B", "C", "B", "B", "C"]));
