var findComplement = function(num) {
  if (num === 1) return 0
  if (num === 2) return 1
  let power = 1;
  while (2 ** power <= num) {
      power += 1;
  }

  let mask = (1 << power) - 1;

  return num ^ mask

};