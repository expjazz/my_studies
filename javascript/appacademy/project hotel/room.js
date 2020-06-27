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
      }
    },
  };
}

let room = createRoom(5);

let guests = ["Andrew", "Peter", "John", "James", "Tome"];
console.log(room.availableSpace());
guests.forEach((n) => {
  room.addOccupant(n);
});
console.log(room.occupants);
