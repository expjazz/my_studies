const longestSubsSameLetters = (str, k) => {
  let start = 0;
  let tempChar = {};
  let result = 0;
  let tempK = k;
  for (let end = 0; end < str.length; end++) {
    rightChar = str[end];
    if (!(rightChar in tempChar)) {
      result = Math.max(result, end - start + 1 + k);
      console.log(str.split("").splice(start, end));
      start = Math.max(start, end);
    }

    tempChar[rightChar] = end;
    result = Math.max(result, end - start + 1);
  }
  return result;
};

console.log(longestSubsSameLetters("aabccbb", 2));
console.log(longestSubsSameLetters("abbcb", 1));
console.log(longestSubsSameLetters("abccde", 1));
