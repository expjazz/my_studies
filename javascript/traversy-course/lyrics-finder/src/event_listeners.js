import { searchSongs } from "./search_songs";
import { result } from "./index.js";
import { getLyrics } from "./get_lyrics.js";

function eventListeners() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value.trim();
    if (!searchTerm) {
      alert("Please type in something");
    } else {
      searchSongs(searchTerm);
    }
  });
  result.addEventListener("click", (e) => {
    const clickedEl = e.target;
    if (clickedEl.tagName === "BUTTON") {
      const artist = clickedEl.getAttribute("data-artist");
      const song = clickedEl.getAttribute("data-songtitle");

      getLyrics(artist, song);
    }
  });
}

export { eventListeners };
