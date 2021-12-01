let tail = function(array) {
  let newArray = [];
  if (array.length >= 2) {
  newArray = array.splice[0]; //every element except the head (first element) of the array.
  return [newArray];
  }
  
  return newArray;  
};

module.exports = tail;
