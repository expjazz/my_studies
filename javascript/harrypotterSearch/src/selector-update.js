const selectorUpdate = (element, students) => {
  return students.filter((student) => {
    if (student.house) {
      let regex = new RegExp(element, "gi");
      console.log(student);
      return student.house.match(regex);
    }
  });
};

export { selectorUpdate };
