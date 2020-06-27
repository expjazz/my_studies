const elements = require("./index");
const imageResultDom = require("./image_result_dom.js");
const addEventListeners = function () {
  elements.searchForm.addEventListener("submit", imageResultDom.imageResultDom);
};

module.exports = { addEventListeners };
