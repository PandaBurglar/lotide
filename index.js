// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const countOnly = require('./countOnly');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle, 
  assertEqual: assertEqual,
  countOnly: countOnly
};