function nAsteroids(asteroids, person ) {
  const coordsPerson = [person.latitude, person.longitude];
  var count = 0;
  asteroids.forEach(element => {
    var coordsAsteroids = [element.latitude, element.longitude]
    var isOver = asteroidOver(coordsAsteroids, coordsPerson);
    if (isOver) count +=1;    
  });
  person.hotspot_asteroids = count;
  return person;
}

function asteroidOver(coordsAsteroid, coordsPerson) {
  if (coordsAsteroid.length === 2 && coordsPerson.length === 2) {
    const x = Math.abs(coordsAsteroid[0] - coordsPerson[0]);
    const y = Math.abs(coordsAsteroid[1] - coordsPerson[1]);
    if (x <= 15 && y <= 15) {
      return true
    }
  }
  return false;
}

module.exports.nAsteroids = nAsteroids;
module.exports.asteroidOver = asteroidOver;