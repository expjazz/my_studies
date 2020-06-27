function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
  this.trumpet = function () {
    console.log(this.name + "goes pghRRRRRRRRR!!!!");
  };
  this.grow = function (add) {
    this.height += add;
  };
  this.addTrick = function (trick) {
    tricks.push(trick);
  };
  this.play = function () {
    console.log(tricks[Math.floor(Math.random() * tricks.length)]);
  };
}

const ele = new Elephant("Jim", 25, ["run", "jump", "lay back"]);
ele.play();
console.log(ele.tricks);
ele.addTrick("Look");
console.log(ele.tricks);
console.log(ele.height);
ele.grow(12);
console.log(ele.height);

let ellie = new Elephant("Ellie", 185, [
  "giving human friends a ride",
  "playing hide and seek",
]);
let charlie = new Elephant("Charlie", 200, [
  "painting pictures",
  "spraying water for a slip and slide",
]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, [
  "trotting",
  "playing tic tac toe",
  "doing elephant ballet",
]);
let herd = [ellie, charlie, kate, micah];

function paradeHelper(ele) {
  console.log(ele.name + " is trotting by!");
}

herd.forEach(paradeHelper);
