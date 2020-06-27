const wordsToMatch = (word, students) => {
  return students.filter((student) => {
    let regex = new RegExp(word, "gi");
    return student.name.match(regex);
  });
};

export { wordsToMatch };
