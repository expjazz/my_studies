const elements = require("./elements.js");
const { listItems } = require("./elements.js");

function dragStart() {
  elements.dragStartIndex = +this.closest("li").getAttribute("data-index");
  console.log(elements.dragStartIndex);
}
function dragEnter() {
  this.classList.add("over");
}
function dragLeave() {
  this.classList.remove("over");
}
function dragOver(e) {
  e.preventDefault();
  this.classList.add("over");
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute("data-index");
  swapItems(elements.dragStartIndex, dragEndIndex);

  this.classList.remove("over");
}

function swapItems(from, to) {
  const itemOne = elements.listItems[from].querySelector(".draggable");
  const itemTwo = elements.listItems[to].querySelector(".draggable");
  console.log(listItems);
  listItems[to].appendChild(itemOne);
  listItems[from].appendChild(itemTwo);
}

module.exports = { dragStart, dragOver, dragDrop, dragLeave, dragEnter };
