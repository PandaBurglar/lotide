const assertArrayEqual = (array1,array2) => { // create a function that takes two arrays and console.logs a statement
  console.log(eqArrays(array1, array2) === true ? '✅ TRUE' : '🛑 FALSE'); // if eq of the two arrays is also true, print true or else false
};

const eqArrays = (array1, array2) => {
  if(array1.length !== array2.length) {
    return false;
  }
for (let i=0; i< array1.length; i++) {
    if (array1[i] !== array2[i]) {
    return false;                                              
    }                                            
} return true;
};

const words = ["ground", "control", "to", "major", "tom"];

// map returns a new array based on the results of callback

const map = function(array, callback) {

  const results = [];
  //console.logs each item in the provided array 
  //& what happens to the item after being passed into the callback.
  for (let item of array) {
   results.push(callback(item));
  }
  return results;
};

// const results1 = map(words, word => word[0]);
// const results1 = map(words, word => word.length);
const results1 = map(words, word => word.length*2);

// assertArrayEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArrayEqual(results1, [ 6, 7, 2, 5, 3]);
assertArrayEqual(results1, [ 12, 14, 4, 10, 6]);


