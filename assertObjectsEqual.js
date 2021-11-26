// // FUNCTION IMPLEMENTATION
// const assertObjectsEqual = function(actual, expected) {
//   // Implement me!
//   const inspect = require('util').inspect; // <= add this line
//   console.log(eqObjects(`${inspect(actual)}`, `${inspect(expected)}`) === true ? '✅ TRUE' : '🛑 FALSE'); // if eq of the two arrays is also true, print true or else false
// };

const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;                                          
    }                  
  } return true;
};

const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1); // create 2 vars that can be assigned to the keys of object1&2
  let key2 = Object.keys(object2);
  if (key1.length !== key2.length) {  // first check if object1 and object 2 have the same length
    return false;
  }
  for (let keys of key1) {
    if (Array.isArray(object1[keys])) {
      //  console.log(object1[keys], object2[keys]);
      // console.log(eqArrays(object1[keys], object2[keys]));
      if (!eqArrays(object1[keys], object2[keys])) {
        //console.log("I got here!");
        return false;
      }
    }

    else if ((object1[keys] !== object2[keys])) {
      // console.log((object1[keys] !== object2[keys]));
      return false;
    }
  }//==> its only returning one key! a,a or c,c !!
  return true;
  // Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {

    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);

  } else {

    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true
assertObjectsEqual(eqObjects(cd, dc), true);