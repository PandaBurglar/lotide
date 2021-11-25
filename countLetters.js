const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

//  should take in a sentence (as a string)
//and then return a count of each of the letters in that sentence.
const countLetters = (sentence) => {
  const results = {}; // declare an empty object
  for (let count of sentence) { // loop through sentnce array using for..of
    if (results[count]) { // // if a given item is in the results list
      results[count] += 1; // if its already in the list, increase count
    } else if (count !== " ") {
      results[count] = 1; // else only count as 1
    }
  } return results;
};

console.log(countLetters("LHL"));
console.log(countLetters("L H L"));
console.log(countLetters("Lighthouse in the house"));
console.log(countLetters(" "));
console.log(assertEqual((countLetters("LHL"))["L"], 2));



