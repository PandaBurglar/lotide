const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


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
