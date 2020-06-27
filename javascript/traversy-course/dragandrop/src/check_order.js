const elements = require("./elements");
const { richestPeople } = require("./elements");

const checkOrder = () => {
  elements.listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector(".draggable").innerText.trim();
    if (personName != richestPeople[index]) {
      listItem.classList.add("wrong");
    } else {
      listItem.classList.remove("wrong");

      listItem.classList.add("right");
    }
  });
};

module.exports = { checkOrder };
