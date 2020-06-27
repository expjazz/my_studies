import { list } from "./transaction_items.js";
import { transactions, removeTransactio } from "./index.js";

import { init } from "./init";

function addTransactionDom(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";

  const item = document.createElement("li");

  item.classList.add(transaction.amount < 0 ? "minus" : "plus");
  item.innerHTML = `
    ${transaction.text} <span> ${sign}${Math.abs(transaction.amount)} </span>
    <button class="delete-btn" id="${transaction.id}"> X </button>
  `;
  list.appendChild(item);
  item.querySelector("button").addEventListener("click", removeTransactio);
}

export { addTransactionDom, removeTransactio };
