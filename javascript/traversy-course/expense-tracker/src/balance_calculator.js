function balanceCalculator(transactions) {
  let tempPlus = 0;
  let tempMinor = 0;
  transactions.forEach((x) => {
    if (x.amount > 0) {
      tempPlus += x.amount;
    } else {
      tempMinor += x.amount;
    }
  });
  return [tempPlus, tempMinor];
}

export { balanceCalculator };
