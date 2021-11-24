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

const assertArrayEqual = (array1,array2) => {
  console.log(eqArrays(array1, array2) === true ? '✅ TRUE' : '🛑 FALSE');
};


// middle function which should return an array with only the middle elements
// length of array could vary 
const middle = (array) => {
  let newArray = []; // new array initiliazed 
  if(array.length <= 2) { // got arrays with one or 2 elements
    return newArray; // => return empty array 
  }
  // for odd number of elements
    if (array.length % 2 !== 0) {
      newArray = array[Math.floor(array.length/2)]; // => return an array containing middle element 
      return [newArray];
  }// even elements 
    let evenMiddle2 = array[array.length/2]; // => return array with two elements in the middle 
    let evenMiddle1 = array[(array.length/2)-1];  
    newArray = [evenMiddle1, evenMiddle2];
    return (newArray);
  
// return the new Array here 
};

let words = [];
 words = ["hello"];
console.log(middle(words));
 words = ["hello", "world"];
console.log(middle(words));
 words = ["hello", "world", "lighthouse", "jonah"];
console.log(middle(words));
 words = ["hello", "world", "lighthouse", "jonah", "amy"];
console.log(middle(words));
middle(words);
