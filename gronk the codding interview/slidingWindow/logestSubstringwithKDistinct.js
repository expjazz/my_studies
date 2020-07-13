const longestSubsK = (str, k) => {
  let windowStart = 0;
  let windowEnd = 0;
  let count = 0;
  let tempK = k;
  let arr = [];
  let result = "";
  let sub = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== sub[sub.length - 1]) {
      if (arr.includes(str[i])) {
        sub += str[i];
      } else {
        count++;
        k--;
        if (k > 0) {
          arr.push(str[i - 1]);
          sub += str[i];
        } else {
          if (sub.length > result.length) result = sub;
          k = count;
          count = 0;
          arr = [];
          sub = str[i];
        }
      }
    } else {
      if (i !== 0) sub += str[i];
    }
  }
  return result;
};

console.log(longestSubsK("cbbebi", 2));
