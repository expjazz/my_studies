import { wordEl, selectedWord, correctLetters, finalMessage, popup } from ".";

function displayWord(word) {
  wordEl.innerHTML = `
    ${word
      .split("")
      .map(
        (letter) =>
          `<span class="letter"> 
        ${correctLetters.includes(letter) ? letter : ""} 
        </span>`
      )
      .join("")}
  `;
  const innerWord = wordEl.innerText.replace(/\n/g, "");

  if (innerWord === word) {
    finalMessage.innerText = "Congratulations! You won! :-)";
    popup.style.display = "flex";
  }
}

export { displayWord };
