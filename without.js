const assertArrayEqual = (array1,array2) => { // create a function that takes two arrays and console.logs a statement
  console.log(eqArrays(array1, array2) === true ? '✅ TRUE' : '🛑 FALSE'); // if eq of the two arrays is also true, print true or else false
};
  
const eqArrays = (array1, array2) => { // eq fucntion that takes two arrays
  if (array1.length !== array2.length) { // if they length of the two arrays isn't the same
    return false; //this
  }
  for (let i = 0; i < array1.length; i++) { // otherwise cycle through the first array
    if (array1[i] !== array2[i]) { // if array1 at index-i isn't the same as array 2 at that index
      return false; // this                                          
    }                        
  } return true; // other this
};


const without = (source, itemsToRemove) => { // without function that accepts two array, one main source with everything and one that contains words that need to be removed
  let newArray = []; //  empty array initialized
  for (let j = 0; j < source.length; j++) { // cycle through source
    if (!itemsToRemove.includes(source[j])) {  // if the items that need to be removed array includes any of the source items at j point in cycle
      newArray.push(source[j]); //push the source item at point j to the new array
    }
  } return newArray;
};

const words = ["hello", "world", "lighthouse"];
const result = without(words, ["lighthouse"]);
console.log(result); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEqual(result, ["hello", "world", "lighthouse"]);