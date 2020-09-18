function isHappy(num) {
  let slow = num;
  let fast = num;

  while (true) {
    slow = math(slow);
    fast = math(math(fast));
    if (slow === fast) break
  }
  return slow === 1
}

function math(num) {
  let sum = 0;
  while (num) {
    let x = num % 10;
    sum += x * x;
    num = Math.floor(num / 10)
  }
  return sum
}