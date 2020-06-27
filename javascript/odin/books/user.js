function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.sayName = function () {
    console.log(this.name);
  };
}
function Test() {}
Test.prototype.test = function () {
  console.log("test");
};
// Student.prototype.sayName = function () {
//   console.log(this.name);
// };

Student.prototype = Object.create(Test.prototype);
Student.prototype.goToProm = function () {
  console.log("Lets go to prom?");
};
let a = new Student("Andrew", 14);
a.test();

a.sayName();
console.log(a.constructor);
console.log(a.name);
a.goToProm();
