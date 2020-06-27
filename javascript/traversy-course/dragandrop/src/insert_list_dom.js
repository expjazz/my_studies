const elements = require("./elements");
const createList = () => {
  [...elements.richestPeople]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => {
      return a.sort - b.sort;
    })
    .map((a) => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("data-index", index);
      listItem.innerHTML = `
    <span class="number"> ${index + 1}</span>
    <div class="draggable" draggable="true">
      <p class="person-name"> ${person} </p>
      <i class="fas fa-grip-lines"></i>
    </div>
    `;

      elements.listItems.push(listItem);

      elements.draggableList.appendChild(listItem);
    });
};

module.exports = { createList };
