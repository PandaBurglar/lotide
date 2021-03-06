const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  horror:  "The Wire"
};
// which takes in an object and a value.
//It should scan the object and
//return the first key which contains the given value
// If no key with that given value is found, then it should return undefined.

const findKeyByValue = (obj, value) => {
  // use object.keys to help search through all object keys
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
  // use for...of to loop over keys returned by Object.keys
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");

assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);