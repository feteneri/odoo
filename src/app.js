import "./assets/styles/reset.css";
import header from "./components/header/header.js";
import line1 from "./components/line1/line1.js";
import line2 from "./components/line2/line2.js";
import brands from "./components/brands/brands.js";
import iceberg from "./components/iceberg/iceberg.js";
import advantages from "./components/advantages/advantages.js";
import security from "./components/security/security.js";
import who from "./components/who/who.js";
import opportunities from "./components/opportunities/opportunities.js";
import testnow from "./components/testnow/testnow.js";
import howmuch from "./components/howmuch/howmuch.js";
import stages from "./components/stages/stages.js";
import about from "./components/about/about.js";
import clients from "./components/clients/clients.js";
import where from "./components/where/where.js";
import footer from "./components/footer/footer.js";



document.querySelector("#header").innerHTML = header();
document.querySelector("#line1").innerHTML = line1();
document.querySelector("#line2").innerHTML = line2();
document.querySelector("#brands").innerHTML = brands();
document.querySelector("#iceberg").innerHTML = iceberg();
document.querySelector("#advantages").innerHTML = advantages();
document.querySelector("#security").innerHTML = security();
document.querySelector("#who").innerHTML = who();
document.querySelector("#opportunities").innerHTML = opportunities();
document.querySelector("#testnow").innerHTML = testnow();
document.querySelector("#howmuch").innerHTML = howmuch();
document.querySelector("#stages").innerHTML = stages();
document.querySelector("#about").innerHTML = about();
document.querySelector("#clients").innerHTML = clients();
document.querySelector("#where").innerHTML = where();
document.querySelector("#footer").innerHTML = footer();
