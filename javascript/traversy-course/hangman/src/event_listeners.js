import { wrongLetters, correctLetters, playAgainBtn } from "./index.js";
import { showNotification } from "./show_notification.js";
import { updateWrongLettersEl } from "./update_wrong_letters.js";
export { addEventListener };
const { displayWord } = require("./display_word");

function addEventListener(word) {
  window.addEventListener("keydown", (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      const letter = e.key;

      if (word.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          correctLetters.push(letter);
          displayWord(word);
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);
          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
  });
  playAgainBtn.addEventListener("click", () => {
    correctLetters.splice(0);
    correctLetters.splice(0);

    let selectedWord = await wordsFunction();
    displayWord(selectedWord);
  });
}
