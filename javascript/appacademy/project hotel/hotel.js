function createRoom(capacity) {
  return {
    capacity,
    occupants: [],
    full: function () {
      if (this.occupants.length < capacity) {
        return false;
      } else {
        return true;
      }
    },
    availableSpace: function () {
      if (this.full()) {
        return "Full";
      } else {
        return capacity - this.occupants.length;
      }
    },
    addOccupant: function (guest) {
      if (this.full()) {
        return false;
      } else {
        this.occupants.push(guest);
        return true;
      }
    },
  };
}

function createHotel(name, rooms = {}) {
  return {
    name,
    rooms,
    initialize: function () {
      Object.keys(rooms).forEach((k) => {
        rooms[k] = createRoom(rooms[k]);
      });
    },
    roomExists: function (name) {
      if (name in this.rooms) {
        return true;
      }
    },
    checkIn: function (person, room) {
      if (this.roomExists(room)) {
        console.log("Sorry, this room does not exists");
      } else {
        if (this.rooms[room].addOccupant(person)) {
          console.log("check in successfull");
        } else {
          console.log("Sorry, room is full");
        }
      }
    },
    hasVacancy: function () {
      let count = 0;
      let space = false;
      Object.keys(this.rooms).forEach((k) => {
        if (this.rooms[k].availableSpace() === 0) {
          count += 1;
        } else {
          space = true;
        }
      });
      if (space) {
        return true;
      } else {
        return false;
      }
    },
    listRooms: function () {
      Object.keys(this.rooms).forEach((k) => {
        if (this.rooms[k].availableSpace() != "full") {
          console.log(k);
          console.log(rooms[k].availableSpace());
        }
      });
    },
  };
}

let hotel = createHotel("Gran", {
  Basement: 4,
  Attic: 2,
  "Under the Stairs": 1,
});

hotel.initialize();
console.log(hotel.rooms["Basement"].addOccupant("John"));
console.log(hotel.rooms["Basement"].occupants);
console.log(hotel.hasVacancy());
hotel.listRooms();
