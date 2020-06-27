import css from "../src/style.css";
const addEventListeners = require("./event_listeners");
const test = require("./test");
const mealApi = require("./mealApi");
const searchForm = document.getElementById("submit");
const searchInput = document.getElementById("search");
const singleMeal = document.getElementById("single-meal");
const resultHeading = document.getElementById("result-heading");
const mealsGrid = document.getElementById("meals");
const run = async () => {
  let meal = await mealApi.mealApi();
};

run();
export { searchForm, searchInput, resultHeading, mealsGrid, singleMeal };
addEventListeners.addEventListeners();
