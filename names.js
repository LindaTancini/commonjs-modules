function createName(firstName, lastName) {
  return { firstName, lastName };
}
console.log(createName("Linda", "Tancini"));

// ESPORTO LA FUNZIONE IN UN'ALTRO FOGLIO JS
module.exports = createName;
