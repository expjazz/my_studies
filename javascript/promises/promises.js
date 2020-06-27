const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
console.log("a");
wait(5000).then(() => console.log("b"));
