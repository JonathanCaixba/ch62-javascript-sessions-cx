// Crear una función que se le pase el nombre de la imagen a mostrar (cat o dino)
// esta imagen es la que se debe mostrar en el elemento con id "logo"

const changeImage = (imageName) => {
    const logoElement = document.getElementById("logo");
    if (imageName === "cat") {
        logoElement.src = "../assets/img/cat.jpg";
    } else if (imageName === "dino") {
        logoElement.src = "../assets/img/dino.jpg";
    }
};

export { changeImage };