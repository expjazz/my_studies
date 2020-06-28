// Write a program that performs base conversion. The input is a string, an integer b1, and another
// integer b2. The string represents an integer in base br. The output should be the string representing
// the integer in base 02. Assume 2 < bt,b2 < 16. Use " N' to represent L0, "B" for 1.L,.. ., and "F" fot
// 15. (For example, if the string is "61.5", h is 7 and bz is 13, then the result should be "1A7", since
// 6x72 +1x7 + 5 = 1x
// 132
// +70xL3+7.)

const baseConversion = (x, b1, b2) => {
  let hash = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };
  count = 1;
  r = 0;
  x.split("").forEach((t) => {
    r += parseInt(t) * Math.pow(b1, x.length - count);
    count += 1;
  });
  something = true;
  temp = [];
  while (something) {
    temp.push(r % b2);
    r = Math.floor(r / b2);
    if (r === 0) {
      something = false;
      break;
    }
  }
  return temp
    .map((tempChar) => {
      return Object.keys(hash).includes(tempChar.toString())
        ? hash[tempChar.toString()]
        : tempChar;
    })
    .reverse()
    .join("");
};

console.log(baseConversion("615", 7, 13));
