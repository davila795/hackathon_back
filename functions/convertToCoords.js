const { body2latlong } = require('keplerjs');

function convertToCoords(nea) {
  const neaCoords = body2latlong(nea);
  if (isNaN(neaCoords.lat) || isNaN(neaCoords.long)) {
    return nea
  }
  nea.latitude = ninety(neaCoords.lat);
  nea.longitude = oneHundredEighty(neaCoords.long);
  return nea; 
};

function ninety(n) {
  if (n <= 90 && n >= -90 ) return n;
  if (n < -90) {
    n = n + 90;
    return ninety(n);
  }
  n = n - 90;
  return ninety(n); 
}
function oneHundredEighty(n) {
  if (n <= 180 && n >= -180 ) return n;
  if (n < -180) {
    n = n + 180;
    return oneHundredEighty(n);
  }
  n = n - 180;
  return oneHundredEighty(n);
}


module.exports.convertToCoords = convertToCoords;