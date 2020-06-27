function Bootcamp(name, slogan, student_capacity) {
  this.name = name;
  this.slogan = slogan;
  this.student_capacity = student_capacity;
}

Bootcamp.prototype.teachers = [];
Bootcamp.prototype.students = [];
Bootcamp.prototype.showStudents = function () {
  this.students.forEach((s) => {
    console.log(s);
  });
};
Bootcamp.prototype.enrolled = function (student) {
  return this.students.includes(student);
};
Bootcamp.prototype.grades = 0;
Bootcamp.prototype.hire = function (teacher) {
  this.teachers.push(teacher);
};
Bootcamp.prototype.showTeachers = function () {
  this.teachers.forEach((t) => {
    console.log(t);
  });
};
Bootcamp.prototype.enroll = function (student) {
  if (this.students.length < this.student_capacity) {
    this.students.push(student);
    return true;
  } else {
    return false;
  }
};
Bootcamp.prototype.studentTeacherRatio = function () {
  return this.students.length / this.teachers.length;
};

Bootcamp.prototype.grades = {};

Bootcamp.prototype.addGrade = function (student, grade) {
  if (this.students.includes(student)) {
    if (student in this.grades) {
      this.grades[student].push(grade);
    } else {
      this.grades[student] = [grade];
    }
    return true;
  } else {
    return false;
  }
};

Bootcamp.prototype.numGrades = function (student) {
  console.log(this.grades[student]);
};

Bootcamp.prototype.averageGrade = function (student) {
  if (student in this.grades && this.grades[student].length > 0) {
    return this.grades[student].reduce((a, b) => {
      return (a + b) / this.grades[student].length;
    });
  } else {
    return undefined;
  }
};

let bootcamp = new Bootcamp("POG", "Programmers of tomorrow", 5);

["Mark", "Josepf", "Andrew", "Peter", "Mary", "Doe"].forEach((n) => {
  console.log(bootcamp.enroll(n));
});
bootcamp.showStudents();
bootcamp.hire("Doe");
bootcamp.showTeachers();
console.log(bootcamp.studentTeacherRatio());

console.log(bootcamp.grades);
console.log(bootcamp.addGrade("Peter", 100));
console.log(bootcamp.addGrade("Peter", 50));
console.log(bootcamp.addGrade("Mary", 77));
console.log(bootcamp.addGrade("Mary", 79));
console.log(bootcamp.addGrade("Anthony", 79));

console.log(bootcamp.grades);
bootcamp.numGrades("Peter");
console.log(bootcamp.averageGrade("Peter"));
