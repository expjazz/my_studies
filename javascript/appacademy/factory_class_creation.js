function createElephant(name, height = 20, tricks = []) {
  return {
    name,
    height,
    tricks,
    trumpet: function () {
      console.log(name + " goes phrRRRRRrr");
    },
    addTrick: function (trick) {
      tricks.push(trick);
    },
    play: function () {
      console.log(tricks[Math.floor(Math.random() * tricks.length)]);
    },
  };
}

const ele = createElephant("Justin", 30, ["Walk", "Jump"]);
console.log(ele.tricks);
ele.trumpet();
ele.play();
