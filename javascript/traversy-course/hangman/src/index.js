import "./style.css";
import { words, wordsFunction } from "./words.js";
import { displayWord } from "./display_word";
import { showNotification } from "./show_notification.js";
import { addEventListener } from "./event_listeners.js";
export {
  wordEl,
  correctLetters,
  finalMessage,
  popup,
  wrongLetters,
  notification,
  wrongLettersEl,
  figureParts,
  playAgainBtn,
};
const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");
const correctLetters = [];
const wrongLetters = [];

async function run() {
  let selectedWord = await wordsFunction();
  addEventListener(selectedWord);
  displayWord(selectedWord);
}
run();
