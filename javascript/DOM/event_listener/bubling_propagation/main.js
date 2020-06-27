let m = document.getElementById("m");
let d = document.getElementById("d");
let p = document.getElementById("p");
let s = document.getElementById("s");
let log = console.log;

let reset = (e) => {
  setTimeout(() => {
    e.className = "";
  }, 2000);
};
d.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  alert("Hy, im a DIV");
});

let highlight = (e) => {
  e.stopPropagation();
  let target = e.currentTarget;
  target.className = "gold";
  reset(target);
};

[m, d, p, s].forEach((e) => {
  e.addEventListener("click", highlight);
});
