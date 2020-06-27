function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function createBoard(number) {
  return {
    grid: new Array(number),
    dim: number,
    initialize: function () {
      for (let i = 0; i < number; i++) {
        this.grid[i] = new Array(number);
        for (y = 0; y < number; y++) {
          this.grid[i][y] = "N";
        }
      }
    },
    size: number * number,
    position: function (array) {
      let a = array[0];
      let b = array[1];
      return this.grid[a][b];
    },
    changeValue: function (array, value) {
      let a = array[0] - 1;
      let b = array[1] - 1;
      this.grid[a][b] = value;
    },
    num_ships: function () {
      let count = 0;
      for (let i = 0; i < this.dim; i++) {
        for (let y = 0; y < this.dim; y++) {
          if (this.grid[i][y] === "S") {
            count += 1;
          }
        }
      }
      return count;
    },
    attack: function (position) {
      if (this.position(position) === "S") {
        this.changeValue(position, "H");
        console.log("You sunk my battleship!");
        return true;
      } else if (this.position(position) === "N") {
        this.changeValue(position, "X");
        console.log("You missed, HAHA!!");
        return false;
      } else if (this.position(position) === "X") {
        console.log("You already tried this square");
      }
    },
    placeRandomShips: function () {
      let percent = Math.floor(this.size * 0.25);
      for (let i = 0; i < percent; i++) {
        let a = sample([1, 2, 3]);
        let b = sample([1, 2, 3]);
        this.changeValue([a, b], "S");
      }
    },
    hiddenShipsGrid: function () {
      let b = new Array(this.dim);
      for (let i = 0; i < this.dim; i++) {
        b[i] = new Array(this.dim);
        for (y = 0; y < this.dim; y++) {
          b[i][y] = this.grid[i][y];
        }
      }
      for (let i = 0; i < this.dim; i++) {
        for (let y = 0; y < this.dim; y++) {
          if (b[i][y] === "S") {
            b[i][y] = "N";
          }
        }
      }
      return b;
    },
    printGrid: function () {
      for (let i = 0; i < this.dim; i++) {
        console.log(this.grid[i]);
      }
    },
    prindHiddenGrid: function () {
      let b = this.hiddenShipsGrid();
      for (let i = 0; i < this.dim; i++) {
        console.log(b[i]);
      }
    },
  };
}

// Now is the player

function createPlayer {
  return {
    getMove: function () {
      console.log("What coordinates do you want to attack?")
    }
  }
}