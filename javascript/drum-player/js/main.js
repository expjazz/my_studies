function removeTransition(e) {
  if (e.propertyName == "transform") {
    this.classList.remove("playing");
  }
}

let pieces = document.getElementsByClassName("piece");
Array.from(pieces).forEach((piece) => {
  piece.addEventListener("click", (e) => {
    console.log(e.target.dataset);
    let audio = document.querySelector(
      `audio[data-key="${e.target.dataset["key"]}"]`
    );
    audio.currentTime = 0;
    audio.play();
  });
  piece.addEventListener("transitionend", removeTransition);
});
window.addEventListener("keydown", (e) => {
  console.log(e.keyCode);
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let piece = document.querySelector(`.piece[data-key="${e.keyCode}"]`);
  if (audio) {
    console.log(piece);
    audio.currentTime = 0;
    audio.play();
    piece.classList.add("playing");
  }
});
