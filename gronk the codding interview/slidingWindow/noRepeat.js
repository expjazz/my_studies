const noRepeat = (str) => {
  let windowStart = 0;
  const hash = {};
  let result = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const leftChar = str[windowEnd];
    if (!hash[leftChar]) hash[leftChar] = 0;
    hash[leftChar] += 1;
    while (check(hash) && windowStart <= windowEnd) {
      const rightChar = str[windowStart];
      hash[rightChar] -= 1;
      windowStart += 1;
    }
    result = Math.max(result, windowEnd - windowStart + 1);
    console.log(hash);
  }
  return result;
};

const check = (hash) => {
  let temp;
  Object.keys(hash).forEach((key) => {
    if (hash[key] > 1) {
      temp = true;
    }
  });
  if (temp !== true) temp = false;
  return temp;
};

console.log(noRepeat("aabccbb"));
