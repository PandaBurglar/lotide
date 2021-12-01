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

module.exports = middle;

