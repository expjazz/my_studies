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

const strToInt = (x) => {
  let r = 0;
  x.split("").forEach((temp) => {
    if (r === 0) {
      r = parseInt(temp);
    } else {
      r = r * 10 + parseInt(temp);
    }
  });
  return r;
};
// console.log(intToStr(-12));
console.log(strToInt("12345"));
