const { convertToCoords } = require('../functions/convertToCoords');
const { neas, users } = require('../functions/data');

const neaFail = {
  "full_name": "1566 Icarus (1949 MA)",
  "a": "hola",
  "e": "hola",
  "i": "22.81881892",
  "om": "87.98911327",
  "w": "31.40697081",
  "ma": "8.160598893"
};

describe("convert To Coords actual nea data", () => {
  test("with good nea object should return a new object with lat and long", () => {
    neas.forEach(input => {
      const lengthInput = Object.keys(input).length;
      const lengthOutput = Object.keys(convertToCoords(input)).length;
      // console.log(input);
      expect(lengthInput).not.toBe(lengthOutput);
    })
    
  });

  test("type must only be an object, retrun the input data", () => {
    const input = false;
    expect(convertToCoords(input)).toBe(input);
  });

  test("with a bad nea object, should return the input data", () => {
    const input = neaFail;
    expect(convertToCoords(input)).toBe(input);
  });
})