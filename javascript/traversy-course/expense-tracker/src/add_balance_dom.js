import { money_minus, balance } from "./transaction_items";
import { money_plus } from "./transaction_items";

const addBalanceDom = (totalCount) => {
  money_plus.innerText = `$+${totalCount[0].toFixed(2)}`;
  money_minus.innerText = `$${totalCount[1].toFixed(2)}`;
  let result = totalCount[0] + totalCount[1];
  balance.innerText = `$ ${result.toFixed(2)}`;
};

export { addBalanceDom };
