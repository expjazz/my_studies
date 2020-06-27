import { apiURL, result, more } from "./index.js";

async function getLyrics(artist, songTitle) {
  const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
  const data = await res.json();

  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");

  result.innerHTML = `<h2><strong>${artist}</strong> - 
  ${songTitle}</h2>
  <span>${lyrics}</span>`;

  more.innerHTML = "";
}

export { getLyrics };
