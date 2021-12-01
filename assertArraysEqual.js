const assertEqual = require('../lotide/assertEqual');
const eqArrays = require('../lotide/eqArrays');
                                  
const assertArrayEqual = (array1,array2) => { // create a function that takes two arrays and console.logs a statement
  console.log(eqArrays(array1, array2) === true ? '✅ TRUE' : '🛑 FALSE'); // if eq of the two arrays is also true, print true or else false
};

module.exports = assertArrayEqual;
  
// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, "2", 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1, 4]), true); 
                                                      
assertArrayEqual([1, 2, 3], [1, 2, 3]);                                  
                                                                                                                                                                                           