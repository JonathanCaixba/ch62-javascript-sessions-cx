/* const getWeatherSwitch = (codigo) => {
    let message;
    switch(codigo){
        case 0:
            currentWeather = "Clear Sky"
            break;
        case 1:
        case 2:
        case 3:
            currentWeather = "Mainly clear, partly cloudy, and overcast";
            break;
        case 45:
        case 48:
            currentWeather = "Fog and depositing rime fog";
            break;
        default:
            currentWeather = "default";
    }
    return currentWeather;
}

console.log(getWeatherSwitch(0)); // Clear Sky
console.log(getWeatherSwitch(1)); // Mainly clear, partly cloudy, and overcast
console.log(getWeatherSwitch(48)); // Fog and depositing rime fog
console.log(getWeatherSwitch(88)); // default */

// Arrays 

const techStack = ["HTML", "CSS", "JavaScript"];

// Acceder al primer elemento
console.log(`Accediendo al primer elemento:  ${ techStack[0] }` ); // "HTML"
// Accediendo al segundo elemento
console.log(`Accediendo al segundo elemento ${techStack[1]}`); // CSS
// Acceder al último elemento (longitud - 1)
console.log(`Accediendo al tercer elemento ${techStack[techStack.length - 1]}`); // JavaScript

/* ================================================================
   BLOQUE 2: MÉTODOS DE ARRAYS (Add/Remove) 
   ================================================================
   JavaScript nos da métodos para manipular la lista como una pila o cola.
*/
const shoppingList = ["Leche", "Huevos"];
// 1. push(): Agrega al FINAL (El más usado)
// Retorna la nueva longitud del array.
shoppingList.push("Pan"); 
console.log("Push:", shoppingList); // ["Leche", "Huevos", "Pan"]
// 2. unshift(): Agrega al INICIO (Mueve todos los índices, es más lento)
shoppingList.unshift("Café");
console.log("Unshift:", shoppingList); // ["Café", "Leche", "Huevos", "Pan"]
