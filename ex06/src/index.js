var myNestedArray = [
   ["Toblerone", 5],
   ["Milka", 3],
]

function myNestedFunction(arr) {
    myNestedArray.push(arr);
    return myNestedArray;
  }
  // Only change code above this line
  console.log(myNestedFunction(["Toblerone", 5], ["Milka", 3]));
  module.exports = myNestedFunction;