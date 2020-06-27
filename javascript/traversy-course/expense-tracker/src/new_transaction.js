import { transactions } from "./index";
import { init } from "./init";
import { addTransactionDom } from "./add_transactions_dom.js";
import { addBalanceDom } from "./add_balance_dom";
import { balanceCalculator } from "./balance_calculator";

const updateDomTransaction = (transaction, transactions) => {
  addTransactionDom(transaction);
  addBalanceDom(balanceCalculator(transactions));
};

function error(e) {
  if (e.value === "") {
    alert(`${e.id} cant be empty`);
  }
}

const newTransaction = (e) => {
  e.preventDefault();
  error(amount);
  error(text);
  let transactionsSize = Object.keys(transactions).length;
  let id = transactionsSize + 1;
  let transaction = {
    id: id,
    amount: parseInt(amount.value),
    text: text.value,
  };
  transactions.push(transaction);
  updateDomTransaction(transaction, transactions);
  text.value = "";
  amount.value = "";
};

form.addEventListener("submit", newTransaction);

export { newTransaction };
