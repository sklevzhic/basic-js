const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

console.log('sampleActivity', sampleActivity)
  if ((typeof sampleActivity == "string") && (parseFloat(sampleActivity) > 0) && (parseFloat(sampleActivity) < 15) && (sampleActivity != "")) {
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
  } else {
    return false
  }



};
