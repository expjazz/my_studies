import {
  wrongLettersEl,
  wrongLetters,
  figureParts,
  finalMessage,
  popup,
} from ".";

export { updateWrongLettersEl };

function updateWrongLettersEl() {
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;

  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;
    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = "You lost. HAHAHAHA";
    popup.style.display = "flex";
  }
}
