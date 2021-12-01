const assert = require('chai').assert;
const tail = require('../tail');

// Test Case: Check the original array
describe("#tail", () => {
  it("returns 3 if the old array is not modified", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  });
  it("returns [] if the old array has only 1 element", () => {
    const words = ["Yo Yo"];
    assert.deepEqual(tail(words), []);
  });
  it("returns [] if the old array empty", () => {
    const words = [];
    assert.deepEqual(tail(words), []);
  });
});
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// assertEqual(words.length, 3); // original array should still have 3 elements!