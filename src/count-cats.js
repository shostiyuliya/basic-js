const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catsArray = [];

  for (const array of matrix) {
    catsArray.push(...array.filter(elem => elem === '^^'));
  }

  return catsArray.length;
};
