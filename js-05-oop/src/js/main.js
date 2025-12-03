// importanción nombrada
import { changeLogo } from "./modules/changeLogo.js";
import { changePrincipalTitle } from "./modules/changePrincipalTitle.js";
import { changeImage } from "./modules/changeImage.js";
import { aliceUser } from "./modules/literalObject.js";

document.getElementById("changeImage").addEventListener("click", () => {
    const currentSrc = document.getElementById("logo").src;
    if (currentSrc.includes("cat.jpg")) {
        changeImage("dino");
    } else {
        changeImage("cat");
    }  
});

console.log(`Datos del arreglo participants desde main.js:`, participants); // ['Alice', 'Bob', 'Charlie']
changePrincipalTitle("title");

// Crear una función que se le pase el nombre de la imagen a mostrar (cat o dino)
// esta imagen es la que se debe mostrar en el elemento con id "logo"
changeLogo("cat.jpg");

console.log( aliceUser.getFullName() );
console.log( aliceUser );
console.log( aliceUser.stringify() );
