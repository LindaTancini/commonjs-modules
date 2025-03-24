function createHobbies(hobbyOne, hobbyTwo, hobbyThree) {
  return [hobbyOne, hobbyTwo, hobbyThree];
}
console.log(createHobbies("Libri", "Videogames", "AnimeManga"));

// ESPORTO LA FUNZIONE IN UN'ALTRO FOGLIO JS
module.exports = createHobbies;
