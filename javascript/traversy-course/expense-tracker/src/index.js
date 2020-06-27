import "./style.scss";
import {
  balance,
  money_plus,
  money_minus,
  list,
  form,
  text,
  amount,
} from "./transaction_items.js";
import { addTransactionDom } from "./add_transactions_dom.js";
import { init } from "./init.js";
import { balanceCalculator } from "./balance_calculator";
import { addBalanceDom } from "./add_balance_dom";
import { newTransaction } from "./new_transaction";
export { transactions, removeTransactio };
const dummyTransactions = [
  { id: 1, text: "Flower", amount: -2 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 },
];

let transactions = dummyTransactions;

let removeTransactio = (e) => {
  console.log(e.target.id);
  console.log(transactions);
  transactions = transactions.filter((x) => x.id != e.target.id);
  console.log(transactions);
  init();
};
init();
