const intToStr = (x) => {
  let isNegative = false;
  if (x < 0) {
    x = -x;
    isNegative = true;
  }
  let s = [];
  let temp = true;
  while (temp) {
    s.push(x % 10);
    x = Math.floor(x / 10);
    if (x === 0) {
      temp = false;
      break;
    }
  }
  return (isNegative ? "-" : "") + s.reverse().join("");
};
console.log(intToStr(1234));
