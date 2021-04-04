const {  nAsteroids ,asteroidOver } = require('../functions/nAsteroids');
const { neas_coords, users } = require('../functions/data');

describe("n Asteroids", () => {
  test("should return a user with the number of hotspotasteroids", () => {
    users.forEach(userBefore => {
      const userAfter = nAsteroids(neas_coords, userBefore);
      const numberAsteroids = userAfter.hotspot_asteroids;
      // console.log(numberAsteroids)
      expect(numberAsteroids).toBeGreaterThanOrEqual(0);
    })
    
  });

  test("a coords with difference greater than 15 should return false", () => {
    const coordsAsteroid = [0, 0];
    const coordsPerson = [16, 5];
    expect(asteroidOver(coordsAsteroid, coordsPerson)).toBe(false)
  });

  test(" coords with a difference less than 15 should return true", () => {
    const coordsAsteroid = [4, 0];
    const coordsPerson = [16, 5];
    expect(asteroidOver(coordsAsteroid, coordsPerson)).toBe(true)
  });
  test(" coords with a difference less than 15 should return true", () => {
    const coordsAsteroid = [1, 0];
    const coordsPerson = [16, 5];
    expect(asteroidOver(coordsAsteroid, coordsPerson)).toBe(true)
  })


})