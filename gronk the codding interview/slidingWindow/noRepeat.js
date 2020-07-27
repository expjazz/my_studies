const noRepeat = (str) => {
  let windowStart = 0,
    maxLength = 0,
    charIndexMax = {};
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charIndexMax) {
      windowStart = Math.max(windowStart, charIndexMax[rightChar]);
    }
    charIndexMax[rightChar] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};

// const noRepeat = (str) => {
//   let windowStart = 0;
//   const hash = {};
//   let result = 0;
//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     const leftChar = str[windowEnd];
//     if (!hash[leftChar]) hash[leftChar] = 0;
//     hash[leftChar] += 1;
//     console.log(check(hash, leftChar));
//     while (check(hash, leftChar)) {
//       const rightChar = str[windowStart];
//       hash[rightChar] -= 1;
//       windowStart += 1;
//     }
//     result = Math.max(result, windowEnd - windowStart + 1);
//   }
//   return result;
// };

// const check = (hash, char) => {
//   return char in hash;
// };

console.log(noRepeat("aabccbb"));
