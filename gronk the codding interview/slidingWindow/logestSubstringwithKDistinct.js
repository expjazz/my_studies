const longestSubsK = (str, k) => {
  let windowStart = 0;
  let hash = {};
  let result = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!hash[rightChar]) hash[rightChar] = 0;
    hash[rightChar] += 1;
    while (Object.keys(hash).length > k) {
      const leftChar = str[windowStart];
      hash[leftChar] -= 1;
      if (hash[leftChar] === 0) delete hash[leftChar];
      windowStart += 1;
    }
    result = Math.max(result, windowEnd - windowStart + 1);
  }
  return result;
};

console.log(longestSubsK("araaci", 2));
console.log(longestSubsK("araaci", 1));
console.log(longestSubsK("cbbebi", 3));
