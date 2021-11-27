const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

// takes in an object and a callback.
// It should scan the object and
// return the first key for which the callback returns a truthy value.
//  If no key is found, then it should return undefined.

const findKey = (obj1, callback) => {
  let result = "";
  for (const key in obj1) {
    // if (key === ' ') {
    //   return undefined;
    // }
    const element = obj1[key]; // value
    // console.log(element);
    if (callback(element)) {
      return key;
    }

    result += key.toString;
  } console.log(result);
  
};

// let results1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2); // => "noma"

let results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3); // => "Akaleri"

console.log(results1);
assertEqual(results1, "noma");
assertEqual(results1, "Akaleri");

