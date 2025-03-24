//  IMPORTO LE FUNZIONI DAGLI ALTRI FOGLI JS
const createName = require("./names.js");
const createHobbies = require("./hobbies.js");
console.log(createName);
console.log(createHobbies);

// FUNZIONE CHE PRENDE PARAMETRI DA ALTRE FUNZIONI
function createPeople() {
  const MyFullName = createName("Linda", "Tancini");
  const myHobbies = createHobbies("Libri", "Videogames", "AnimeManga");
  return {
    MyFullName,
    myHobbies,
  };
}
console.log(createPeople());
