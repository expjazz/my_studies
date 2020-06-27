import { result, more } from "./index.js";

export { showArtistDom };

function getMoreSongss(url) {
  console.log("a");
  return async function () {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
    const data = await res.json();
    showArtistDom(data);
  };
}
const showArtistDom = (info) => {
  result.innerHTML =
    `    <ul class="songs">
  ` +
    info.data
      .map((song) => {
        return `
    <li> 
      <span><strong>${song.artist.name}</strong> - ${song.title}</span>
      <button class="btn" data-artist="${song.artist.name}"
      data-songtitle="${song.title}">Get Lyrics</button>
    </li>
    `;
      })
      .join("") +
    `</ul>
  `;
  something(info);
};
function something(info) {
  if (info.prev || info.next) {
    more.innerHTML = `
      ${info.prev ? `<button class="btn" id="prev">Prev</button>` : ""}
      ${info.next ? `<button class="btn" id="next" >Next</button>` : ""}

    `;
    let temp = document.getElementById("next");
    let temp2 = document.getElementById("prev");
    if (temp) {
      temp.addEventListener("click", getMoreSongss(info.next));
    } else if (temp2) {
      temp2.addEventListener("click", getMoreSongss(info.prev));
    }
  } else {
    more.innerHTML = "";
  }
}
