function capital(capitals) {
  console.log(capitals.length);
  let a = [];
  let b = 0;
  for (let i = 0; i < capitals.length; i++) {
    if (capitals[i]["country"]) {
      a[0] =
        "The capital of " +
        capitals[i]["country"] +
        " is " +
        capitals[i]["capital"];
      b += 1;
    } else if (b === 0) {
      console.log(b);
      a.push(
        "The capital of " +
          capitals[i]["state"] +
          " is " +
          capitals[i]["capital"]
      );
    }
  }
  return a;
}

console.log(
  capital([
    { state: "Maine", capital: "Augusta" },
    { country: "Spain", capital: "Madrid" },
  ])
);
