const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => this.classList.add("trigger-enter-active"), 150);
  background.classList.add("open");
  const dropdown = this.querySelector(".dropdown");
  const navCords = nav.getBoundingClientRect();
  itemCoords = dropdown.getBoundingClientRect();
  let width = itemCoords.width;
  let height = itemCoords.height;
  let top = itemCoords.top - navCords.top;
  let left = itemCoords.left - navCords.left;
  background.style.height = `${height}px`;
  background.style.width = `${width}px`;
  background.style.transform = `translate(${left}px, ${top}px)`;
}

function handleLeave() {
  this.classList.remove("trigger-enter");
  setTimeout(() => this.classList.remove("trigger-enter-active"), 150);
  background.classList.remove("open");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
