function noRepeat(str) {
  let hash = {};
  let first = 0;
  let second = 0;
  charCount = 0;
  while (second < str.length) {
    let char = str[second];
    if (!hash[char]) {
      hash[char] = true;
    } else {
      let charTwo = str[first];
      while (charTwo !== char) {
        delete hash[charTwo];
        first += 1;
        charTwo = str[first]

      }
      delete hash[charTwo];
      first += 1
      hash[char] = true
    }
    second += 1;
    charCount = Math.max(charCount, second - first)
  }
  return charCount

}

console.log(noRepeat("abccde"))