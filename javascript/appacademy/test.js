function dinnerBreakfest() {
  let order = "I'd like cheesy scrambled eggs";
  return function (orders = "") {
    order = order + " " + orders;
    if (order) {
      console.log(order);
    } else {
      console.log(order);
    }
  };
}
let a = dinnerBreakfest();
a("Rice");
a("Beans");
