import "./assets/styles/reset.css";
import header from "./components/header/header.js";
import line1 from "./components/line1/line1.js";
import line2 from "./components/line2/line2.js";


document.querySelector("#header").innerHTML = header();
document.querySelector("#line1").innerHTML = line1();
document.querySelector("#line2").innerHTML = line2();