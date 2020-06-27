const elements = require("./index.js");

const singleMealDom = function (mealInfo) {
  let count = 0;
  elements.singleMeal.innerHTML = `
  <img src="${mealInfo.strMealThumb}" class="img" alt="">
  <div class="single-meal-info">${mealInfo.strCategory} <br> 
  ${mealInfo.strArea}
  </div>
  <p>${mealInfo.strInstructions}</p>
  <h5>Ingredients</h5>
  <ul>

    ${Object.keys(mealInfo)
      .map((ing) => {
        let regex = new RegExp("strIngredien", "gi");
        if (ing.match(regex)) {
          count += 1;
          return `
        <li>
        ${mealInfo[ing]} - ${mealInfo["strMeasure" + count.toString()]}

        </li>
        `;
        }
      })
      .join("")}
 

  </ul>
  
  
  `;
};

module.exports = { singleMealDom };
