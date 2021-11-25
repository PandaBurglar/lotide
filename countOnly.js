const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) { 
  const results = {}; // create a new object that will count number of instance for each string
  
  for (let inst of allItems) { // loop through allItems array using for..of
    console.log(inst); // print each string in allItems so we can see what on the list
    // inside the loop, 
    if (itemsToCount[inst] > 0) { // if itemsToCount@inst is "truthy" or in the array
      
      if(results[inst]) { // 
        results[inst] += 1; // add 1 count to results @ inst of allItems
      } else {
        results[inst] = 1; // else only count as 1
      }
    }
  } return results; // return the object containing the # of instances in each array
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// result1 is undefined and we are trying to access a property ('Jason') on undefined as though it were an object.

assertEqual(result1["Jason"], 1); // assertEqual function can only compare primitive values
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);