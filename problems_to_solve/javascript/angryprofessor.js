function angryProfessor(k, a) {
  console.log(k);
  console.log(a);
  let count = 0;
  console.log(a.length);
  for (let i = 0; i < a.length; i++) {
    console.log("a");
    if (a[i] <= 0) {
      console.log(a[i]);
      count += 1;
      console.log(count);
    }
  }
  console.log(count);
  if (count >= k) {
    return "NO";
  } else {
    return "YES";
  }
}

console.log(angryProfessor(2, [-1, -3, 4, 2]));
