const elements = require("./elements");
const drag = require("./drag.js");
const checkOrder = require("./check_order.js");
function addEventListeners() {
  console.log(elements.dragabbles);
  document.querySelectorAll(".draggable").forEach((d) => {
    d.addEventListener("dragstart", drag.dragStart);
  });
  elements.check.addEventListener("click", checkOrder.checkOrder);
  elements.listItems.forEach((item) => {
    console.log("b");
    item.addEventListener("dragover", drag.dragOver);
    item.addEventListener("drop", drag.dragDrop);
    item.addEventListener("dragenter", drag.dragEnter);
    item.addEventListener("dragleave", drag.dragLeave);
  });
}

module.exports = { addEventListeners };
