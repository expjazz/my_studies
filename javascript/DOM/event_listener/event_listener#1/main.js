let btn = document.getElementById("btn");
let lkn = document.getElementById("link");
let txt = document.getElementById("txt");

btn.addEventListener("click", buttonClicked);

function buttonClicked(e) {
  alert(e.type + e.target + e.currentTarget);
}

lkn.addEventListener("click", (e) => {
  e.preventDefault();
  alert(e.typy + e.target + e.currentTarget);
});

txt.addEventListener("input", (e) => {
  if (e.target.value === "test") {
    alert(e.target + e.target.value + " this is the INPUT event");
  } else if (e.target.value === "not tst") {
    alert(e.target.value);
  }
});

txt.addEventListener("change", (e) => {
  alert(e.target + e.target.value + "/n this is the CHANGE event");
});

txt.addEventListener("blur", (e) => {
  alert(e.target + e.target.value + " this is the BLUR event");
});
