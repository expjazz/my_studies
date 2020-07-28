const noRepeat = (str) => {
  let windowStart = 0,
    maxLength = 0,
    charIndexMax = {};
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charIndexMax) {
      console.log(windowStart);
      console.log(charIndexMax[rightChar]);
      console.log(rightChar);
      windowStart = Math.max(windowStart, charIndexMax[rightChar] + 1);
    }
    charIndexMax[rightChar] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};
console.log(noRepeat("abaccbb"));
console.log("-----------------------------");
console.log(noRepeat("abcabcbb"));

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
