
document.getElementById("title").innerText = "OOP in JavaScript, Cohorte 62";

import { changeImage } from "./modules/changeImage.js";

document.getElementById("changeImageButton").addEventListener("click", () => {
    const currentSrc = document.getElementById("logo").src;
    if (currentSrc.includes("cat.jpg")) {
        changeImage("dino");
    } else {
        changeImage("cat");
    }  
});