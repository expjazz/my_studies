import { screwYou } from "../src/students";

const key = "$2a$10$U0xizVnwLbfEiqkjsr31v.XYSxdusDVgcrSkOxCWUblX/PTGIfTOG";
let url = `https://www.potterapi.com/v1/characters/?key=${key}`;

let students = [];
const promise = fetch(url).then((res) =>
  res.json().then((data) => {
    students.push(...data);
  })
);
function test() {
  console.log(students);
}

test();
