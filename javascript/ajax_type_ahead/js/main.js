let cities = [];
fetch(endpoint).then((blob) =>
  blob.json().then((data) => cities.push(...data))
);

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    let regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  let matchArray = findMatches(this.value, cities);
  console.log(matchArray);
  const html = matchArray
    .map((place) => {
      return `
    <li>
      <span class=name>${place.city}, ${place.state} </span>
    </li>`;
    })
    .join("");
  suggestions.innerHTML = html;
}

let searchInput = document.querySelector(".search");
let suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
