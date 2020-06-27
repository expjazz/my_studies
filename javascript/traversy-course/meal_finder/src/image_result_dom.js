const elements = require("./index");
const mealApi = require("./mealApi.js");
const singleMealDom = require("./single_meal_dom");
async function imageResultDom(e) {
  e.preventDefault();
  let searchQuery = elements.searchInput.value;
  let searchResultContent = await mealApi.mealApi(searchQuery);
  let count = 0;
  elements.mealsGrid.innerHTML = `
    ${searchResultContent
      .map((result) => {
        let img = result.strMealThumb;
        count += 1;
        return `
        <div class="meal" id="individual_meal${count}">
        
          <img
            src="${img}"
            alt=""
          />
          <div class="meal-info">
            ${result.strMeal}
          </div>
        </div>
        `;
      })
      .join("")}
  `;
  count = 0;
  searchResultContent.map((result) => {
    count += 1;
    document
      .getElementById(`individual_meal${count}`)
      .addEventListener("click", () => {
        singleMealDom.singleMealDom(result);
      });
  });
}

module.exports = { imageResultDom };
