let list = document.querySelector("#book-list ul");

list.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    let li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

const addForm = document.forms["add-book"];
addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let value = addForm.querySelector("input[type='text']").value;

  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  deleteBtn.className = "delete";
  deleteBtn.textContent = "delete";
  bookName.textContent = value;

  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});
