const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
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

const eqObjects = function(object1, object2) {
  // create 2 vars that can be assigned to the keys of object1&2
  var key1 = Object.keys(object1);
  var key2 = Object.keys(object2);
  // first check if object1 and object 2 have the same length 
  if (key1.length !== key2.length) {
    return false;
  }
  for (let keys of key1) {
   if (Array.isArray(object1[keys])) {
    //  console.log(object1[keys], object2[keys]);
     // console.log(eqArrays(object1[keys], object2[keys]));
     if(!eqArrays(object1[keys], object2[keys])) {
       //console.log("I got here!");
       return false;
      }
    } 
    else if ((object1[keys] !== object2[keys])) {
      console.log((object1[keys] !== object2[keys]));
      return false;
    } 
  }//==> its only returning one key! a,a or c,c !!

return true;
  // Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);