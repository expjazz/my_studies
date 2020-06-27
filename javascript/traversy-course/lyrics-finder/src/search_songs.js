import { apiURL } from "./index.js";
import { showArtistDom } from "./show_artist_dom.js";
export { searchSongs };

async function searchSongs(term) {
  console.log("ha");
  const res = await fetch(`${apiURL}/suggest/${term}`);
  const data = await res.json();

  showArtistDom(data);
}
