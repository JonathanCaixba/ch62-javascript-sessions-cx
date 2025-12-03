
document.getElementById("title").innerText = "OOP in JavaScript, Cohorte 62";

import { changeImage } from "./modules/changeImage.js";

document.getElementById("changeImage").addEventListener("click", () => {
    const currentSrc = document.getElementById("logo").src;
    if (currentSrc.includes("cat.jpg")) {
        changeImage("dino");
    } else {
        changeImage("cat");
    }  
});
console.log(`Datos del arreglo participants desde main.js:`, participants); // ['Alice', 'Bob', 'Charlie']
