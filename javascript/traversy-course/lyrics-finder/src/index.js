import "./style.css";
import { eventListeners } from "./event_listeners.js";
export { apiURL, result, more };

const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiURL = "https://api.lyrics.ovh";

eventListeners();
