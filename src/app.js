import "./assets/styles/reset.css";
import header from "./components/header/header.js";
import line1 from "./components/line1/line1.js";


document.querySelector("#header").innerHTML = header();
document.querySelector("#line1").innerHTML = line1();
