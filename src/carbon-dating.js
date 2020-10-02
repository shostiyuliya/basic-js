const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const numberSampleActivity = Number(sampleActivity);
  if (
    typeof sampleActivity === 'string'
    && Number.isFinite(numberSampleActivity)
    && (numberSampleActivity > 0 && numberSampleActivity <= 15)
  ) {
    const k = 0.693/HALF_LIFE_PERIOD;
    return Math.log2(MODERN_ACTIVITY / numberSampleActivity) / k;
  }
  else {
    return false;
  }
};
