!function(n){var e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(r,i,function(e){return n[e]}.bind(null,i));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e),t.d(e,"searchForm",(function(){return o})),t.d(e,"searchInput",(function(){return a})),t.d(e,"resultHeading",(function(){return l})),t.d(e,"mealsGrid",(function(){return c})),t.d(e,"singleMeal",(function(){return s}));t(2);const r=t(6),i=(t(8),t(1)),o=document.getElementById("submit"),a=document.getElementById("search"),s=document.getElementById("single-meal"),l=document.getElementById("result-heading"),c=document.getElementById("meals");(async()=>{await i.mealApi()})(),r.addEventListeners()},function(n,e){n.exports={mealApi:async n=>{const e=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+n);return(await e.json()).meals}}},function(n,e,t){var r=t(3),i=t(4);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);n.exports=i.locals||{}},function(n,e,t){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function s(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},r=[],i=0;i<n.length;i++){var o=n[i],l=e.base?o[0]+e.base:o[0],c=t[l]||0,d="".concat(l," ").concat(c);t[l]=c+1;var u=s(d),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:h(p,e),references:1}),r.push(d)}return r}function c(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,u=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function p(n,e,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=u(e,i);else{var o=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}function f(n,e,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var m=null,g=0;function h(n,e){var t,r,i;if(e.singleton){var o=g++;t=m||(m=c(e)),r=p.bind(null,t,o,!1),i=p.bind(null,t,o,!0)}else t=c(e),r=f.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var i=s(t[r]);a[i].references--}for(var o=l(n,e),c=0;c<t.length;c++){var d=s(t[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=o}}}},function(n,e,t){(e=t(5)(!1)).push([n.i,'* {\n  box-sizing: border-box;\n}\n\nbody {\n  background: #2d2013;\n  color: #fff;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  margin: 0;\n}\n\n.container {\n  margin: auto;\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.flex {\n  display: flex;\n}\n\ninput,\nbutton {\n  border: 1px solid #dedede;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  font-size: 14px;\n  padding: 8px 10px;\n  margin: 0;\n}\n\ninput[type="text"] {\n  width: 300px;\n}\n\n.search-btn {\n  cursor: pointer;\n  border-left: 0;\n  border-radius: 0;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.random-btn {\n  cursor: pointer;\n  margin-left: 10px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.meals {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 20px;\n  margin-top: 20px;\n}\n\n.meal {\n  cursor: pointer;\n  position: relative;\n  height: 180px;\n  width: 180px;\n  text-align: center;\n}\n\n.meal img {\n  width: 100%;\n  height: 100%;\n  border: 4px #fff solid;\n  border-radius: 2px;\n}\n\n.meal-info {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.2s ease-in;\n  opacity: 0;\n}\n\n.meal:hover .meal-info {\n  opacity: 1;\n}\n\n.single-meal {\n  margin: 30px auto;\n  width: 70%;\n}\n\n.single-meal img {\n  width: 300px;\n  margin: 15px;\n  border: 4px #fff solid;\n  border-radius: 2px;\n}\n\n.single-meal-info {\n  margin: 20px;\n  padding: 10px;\n  border: 2px #e09850 dashed;\n  border-radius: 5px;\n}\n\n.single-meal p {\n  margin: o;\n  letter-spacing: 0.5px;\n  line-height: 1.5;\n}\n\n.single-meal ul {\n  padding-left: 0;\n  list-style-type: none;\n}\n\n.single-meal ul li {\n  border: 1px solid #ededed;\n  border-radius: 5px;\n  background-color: #fff;\n  display: inline-block;\n  color: #2d2013;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 5px;\n  margin: 0 5px 5px 0;\n}\n\n@media (max-width: 800px) {\n  .meals {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 700px) {\n  .meals {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .meal {\n    height: 200px;\n    width: 200px;\n  }\n}\n@media (max-width: 500px) {\n  input[type="text"] {\n    width: 100%;\n  }\n\n  .meals {\n    grid-template-columns: 1fr;\n  }\n\n  .meal {\n    height: 300px;\n    width: 300px;\n  }\n}\n',""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(o).concat([i]).join("\n")}var a,s,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},function(n,e,t){const r=t(0),i=t(7);n.exports={addEventListeners:function(){r.searchForm.addEventListener("submit",i.imageResultDom)}}},function(n,e,t){const r=t(0),i=t(1),o=t(9);n.exports={imageResultDom:async function(n){n.preventDefault();let e=r.searchInput.value,t=await i.mealApi(e),a=0;r.mealsGrid.innerHTML=`\n    ${t.map(n=>{let e=n.strMealThumb;return a+=1,`\n        <div class="meal" id="individual_meal${a}">\n        \n          <img\n            src="${e}"\n            alt=""\n          />\n          <div class="meal-info">\n            ${n.strMeal}\n          </div>\n        </div>\n        `}).join("")}\n  `,a=0,t.map(n=>{a+=1,document.getElementById("individual_meal"+a).addEventListener("click",()=>{o.singleMealDom(n)})})}}},function(n,e){n.exports={test:"test"}},function(n,e,t){const r=t(0);n.exports={singleMealDom:function(n){let e=0;r.singleMeal.innerHTML=`\n  <img src="${n.strMealThumb}" class="img" alt="">\n  <div class="single-meal-info">${n.strCategory} <br> \n  ${n.strArea}\n  </div>\n  <p>${n.strInstructions}</p>\n  <h5>Ingredients</h5>\n  <ul>\n\n    ${Object.keys(n).map(t=>{let r=new RegExp("strIngredien","gi");if(t.match(r))return e+=1,`\n        <li>\n        ${n[t]} - ${n["strMeasure"+e.toString()]}\n\n        </li>\n        `}).join("")}\n \n\n  </ul>\n  \n  \n  `}}}]);