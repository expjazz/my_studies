const longestSubsK = (str, k) => {
  let windowStart = 0;
  let hash = {};
  let count = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!hash[rightChar]) hash[rightChar] = 0;
    hash[leftChar] += 1;
    while (Object.keys(hash).length > k) {}
  }
};

console.log(longestSubsK("araaci", 2));
