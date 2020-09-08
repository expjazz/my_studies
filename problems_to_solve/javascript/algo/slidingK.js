const longestSubK = (str, k) => {
  let first = 0;
  let second = 0;
  const memory = {};
  let count = 0;
  while (second < str.length - 1) {
    console.log(memory)
    const letter = str[second];
    if (!Object.keys(memory).includes(str[second])) memory[letter] = 1;
    if (letter in memory) {
      const distinct = Object.keys(memory).length;
      if( distinct < k ){
        memory[letter] += 1;
      } else {
        first += 1
        memory[letter] -= 1;
        if (memory[letter] === 0) delete memory[letter];
      }
    }
    second += 1;
    count = Math.max(count, second - first + 1)
  }
  return count 


}

console.log(longestSubK('araaci', 1))