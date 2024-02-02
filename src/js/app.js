import * as flsFunctions from "./modules/functions.js";
import * as modalLogic from "./modules/modal.js";
import * as cardion from "./modules/cardion.js";
import * as imgLoad from "./modules/img-load.js";
import * as observer from "./modules/intersection.js";

flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", () => {
  const updateBlockSize = () => {
    var block1 = document.getElementById("block1");
    var block2 = document.getElementById("block2");

    var block1Width = block1.offsetWidth;

    block2.style.width = block1Width + "px";
  };

  updateBlockSize();

  window.addEventListener("resize", updateBlockSize);
});

const toggleInputPlaceholder = () => {
  const width = window.innerWidth;
  const emailInput = document.getElementById("email");

  if (width < 480) {
    emailInput.placeholder = "Email address";
  } else {
    emailInput.placeholder = "Enter email address";
  }
};

window.addEventListener("resize", toggleInputPlaceholder);
window.addEventListener("load", toggleInputPlaceholder);

// fetch(
//   "https://api.opencagedata.com/geocode/v1/json?q=Irpin&countrycode=UA&key=a7385109eca14211bccab2664b72a505"
// )
//   .then((res) => res.json())
//   .then((data) => console.log(data.results));
