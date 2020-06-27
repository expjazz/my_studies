const key = "$2a$10$U0xizVnwLbfEiqkjsr31v.XYSxdusDVgcrSkOxCWUblX/PTGIfTOG";
let url = `https://www.potterapi.com/v1/characters/?key=${key}`;

async function students() {
  let students = [];

  let res1 = await fetch(url);
  let json = await res1.json();
  students.push(...json);
  return students;
}

export { students };
