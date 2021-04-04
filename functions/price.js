function price(person) {
  const age = parseInt(person.age);
  const nAsteroids = parseInt(person.hotspot_asteroids);
  if (typeof age === typeof nAsteroids && typeof age === 'number' && !isNaN(age) && !isNaN(nAsteroids)) {
    const fixexPrice = 170;
    const variablePrice = (100 / 35) * age + 10 * nAsteroids;
    person.price = fixexPrice + variablePrice;
    return person;
  }
  return false;
};


module.exports.price = price;