const { price } = require('../functions/price');
const { users_hotspot } = require('../functions/data');

describe("check price function", () => {
  users_hotspot.forEach(user => {
    const userAfter = price(user);
    const nAsteroids = user.hotspot_asteroids;
    const age = user.age;
    var priceHardCode = 170 + (100 / 35) * age + 10 * nAsteroids;
    var priceUserAfter = userAfter.price;
    test("the price should be the same", () => {
      expect(priceHardCode).toBe(priceUserAfter);
    })
  })
})