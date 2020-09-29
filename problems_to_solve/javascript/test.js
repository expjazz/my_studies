function test() {
  let counter = 0;
  function increment(instructions) {
    counter++;
    counter += instructions(counter)
    return instructions
  }
  return increment
}

const a = test();

const s = a((c) => (console.log(c)))
console.log(s)
console.log(s())
a((c) => console.log(c))
