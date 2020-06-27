const hiddenToggler = () => {
  hiddenMenu.classList.toggle("show");
};
let closeButton = document.getElementById("selector-close");
let hiddenMenu = document.getElementById("hidden-menu");
let hiddenButton = document.getElementById("selector");
hiddenButton.addEventListener("click", hiddenToggler);
closeButton.addEventListener("click", hiddenToggler);

export { hiddenButton, hiddenToggler };
