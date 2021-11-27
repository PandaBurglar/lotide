const assertArrayEqual = (array1,array2) => { // create a function that takes two arrays and console.logs a statement
  console.log(eqArrays(array1, array2) === true ? '✅ TRUE' : '🛑 FALSE'); // if eq of the two arrays is also true, print true or else false
};

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

// slice of the array with elements taken from the beginning.
//It should keep going until the callback/predicate returns a truthy value.
const takeUntil = function(array, callback) {
  // ...
  let slicedArray = array.entries();
  let begArrayItems = [];
  let begArrayIndicies = [];

  for (let [index, item] of slicedArray) {
    if (callback(item) === true) {
      break;
    }
    begArrayIndicies.push(index);
    begArrayItems.push(item);
  }
  return begArrayItems;

};

// callback will only provide one value, the item in the array
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArrayEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArrayEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArrayEqual(results1, [ 12, 14, 4, 10, 6]);

