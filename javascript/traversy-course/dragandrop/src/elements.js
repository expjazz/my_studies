const draggableList = document.getElementById("draggable-list");
const check = document.getElementById("check");
const dragabbles = document.querySelectorAll(".draggable");
const dragListItems = document.querySelectorAll(".draggable-list li");
const richestPeople = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffet",
  "Bernard Arnault",
  "Carlos Helu",
  "Amancio Ortega",
  "Larry Ellison",
  "Mark Zuckerberg",
  "Michael Bloomberg",
  "Larry Page",
];

const listItems = [];
let dragStartIndex = 0;
module.exports = {
  draggableList,
  check,
  richestPeople,
  listItems,
  dragStartIndex,
  dragabbles,
  dragListItems,
};
