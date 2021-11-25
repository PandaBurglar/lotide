const assertArrayEqual = (array1,array2) => {
  console.log(eqArrays(array1, array2) === true ? '✅ TRUE' : '🛑 FALSE');
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


// will return all the indices (zero-based positions) 
// in the string where each character is found.
const letterPositions = function(sentence) { 
  const results = {}; // new object
   for (let i = 0; i < sentence.length; i++) { //For each letter
     let mySentence = sentence[i]; // character at i is assigned to mySentence
     if (mySentence !== " ") { // as long as mySentence isn't empty
       if(results[mySentence]) { // if a given item is in the results list
         results[mySentence].push(i); // push the inidices of that  in the array
       } else {
         results[mySentence] = [i]; // assign the index to that character
       }
     }
   }
  return(results);
};

//PROBLEMS: all the repeating letters are not being assigned as [2, 3]
// h is a key in the object that letterPositions returns
// assertArrayEqual(letterPositions("hello").h, [1]);
// assertArrayEqual(letterPositions("hello").e, [1]);
// assertArrayEqual(letterPositions("hello").l, [2,3]);
assertArrayEqual(letterPositions("lighthouse in the house").o, [6,16]);
assertArrayEqual(letterPositions("lighthouse in the house").o, [4]);