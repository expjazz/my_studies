import "./style.scss";
import { students } from "./students.js";
import { wordsToMatch } from "./query.js";
import { update } from "./update.js";
import { hiddenButton, hiddenToggler } from "./hiddenmenu.js";
import { selectorMenu, select } from "./select-generator.js";
import { selectorUpdate } from "./selector-update.js";

let studentQuery = document.getElementById("student");

let element = document.getElementById("fill-me");

function selectGenerator() {
  students().then((list) => {
    selectorMenu(list);
  });
}
selectGenerator();

function search(e) {
  if (e.currentTarget === studentQuery && e.type === "keyup") {
    students().then((list) => {
      update(wordsToMatch(this.value, list), element);
    });
  } else if (e.currentTarget === select && e.type === "change") {
    students().then((list) => {
      update(selectorUpdate(this.value, list), element);
    });
  }
}

studentQuery.addEventListener("change", search);
studentQuery.addEventListener("keyup", search);
select.addEventListener("change", search);
