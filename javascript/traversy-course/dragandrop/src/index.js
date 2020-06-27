import css from "../src/style.css";
const elements = require("./elements");
const insertListDom = require("./insert_list_dom");
const eventListeners = require("./add_event_listeners.js");
insertListDom.createList();

eventListeners.addEventListeners();
