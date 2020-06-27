console.log("a");

const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);
function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  const cords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
  highlight.style.transform = `translate(${cords.left}px, ${cords.top}px)`;
}

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
