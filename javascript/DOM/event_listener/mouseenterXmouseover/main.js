document.querySelector(".enter p").addEventListener("mouseenter", entering);
document.querySelector(".enter p").addEventListener("mouseleave", leaving);
function entering(ev) {
  ev.currentTarget.style.borderColor = "gold";
  console.log("mouseenter p");
}
function leaving(ev) {
  ev.currentTarget.style.borderColor = "black";
  console.log("mouseleave p");
}
document.querySelector(".over p").addEventListener("mouseover", overing);
document.querySelector(".over p").addEventListener("mouseout", outing);
function overing(ev) {
  ev.currentTarget.style.borderColor = "gold";
  console.log("mouseover p");
}
function outing(ev) {
  ev.currentTarget.style.borderColor = "black";
  console.log("mouseout p");
}

//NO Differences so far...

document.querySelector(".enter").addEventListener("mouseenter", function (ev) {
  ev.currentTarget.classList.add("blue");
  console.log("mouseenter div. Add blue.");
});
document.querySelector(".enter").addEventListener("mouseleave", function (ev) {
  ev.currentTarget.classList.remove("blue");
  console.log("mouseleave div. Remove blue.");
});

document.querySelector(".over").addEventListener("mouseout", function (ev) {
  ev.currentTarget.classList.remove("blue");
  console.log("mouseout div. Remove blue.");
});
document.querySelector(".over").addEventListener("mouseover", function (ev) {
  ev.currentTarget.classList.add("blue");
  console.log("mouseover div. Add blue.");
  //, ev.currentTarget.tagName, ev.target.tagName
});
