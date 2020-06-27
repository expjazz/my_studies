import { list } from "./transaction_items";
import { transactions } from "./index.js";

import { addTransactionDom } from "./add_transactions_dom";
import { balanceCalculator } from "./balance_calculator";
import { addBalanceDom } from "./add_balance_dom";
export { init };

function init() {
  list.innerHTML = "";
  transactions.forEach(addTransactionDom);
  console.log(transactions);
  let plusMinusCount = balanceCalculator(transactions);
  console.log(plusMinusCount);
  addBalanceDom(plusMinusCount);
}
