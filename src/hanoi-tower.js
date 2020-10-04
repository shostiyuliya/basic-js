const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const minTurns = Math.pow(2, disksNumber) - 1;
  const minSeconds = Math.floor(minTurns * 3600 / turnsSpeed);
  return {
    turns: minTurns,
    seconds: minSeconds
  }
};
