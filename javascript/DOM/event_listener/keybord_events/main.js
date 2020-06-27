let log = console.log;
let txt = document.getElementById("txt");
txt.addEventListener("keydown", (e) => {
  //alert(e.type + e.target);
  let target = e.currentTarget;
  let tag = target.tagName;
  let char = e.char || e.charCode || e.which;
  let s = String.fromCharCode(char);
  alert(char + tag + s);
});
document.addEventListener("keydown", (e) => {
  //alert(e.type + e.target);
  let target = e.currentTarget;
  let tag = target.tagName;
  let char = e.char || e.charCode || e.which;
  let s = String.fromCharCode(char);
  alert(char + tag + s);
});
