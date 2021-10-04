/*
Description: The every method executes the provided callbackFn function once for 
each element present in the array until it finds the one where callbackFn returns a falsy value. 
If such an element is found, the every method immediately returns false. 
Otherwise, if callbackFn returns a truthy value for all elements, every returns true.

Parameters: callbackFn
A function to test for each element, taking three arguments:

element
The current element being processed in the array.

index Optional
The index of the current element being processed in the array.

array Optional
The array every was called upon.

Return Value: 
true if the callbackFn function returns a truthy value for every array element. Otherwise, false.
*/

Array.prototype.myEvery = function(callbackFn) {

    for(let i=0; i<this.length; i++)
    {
      if(this[i]===undefined) continue;{
      if(callbackFn(this[i],i,this)==false)
      {
        return false;
      }
      }
    }

    return true;

};




console.log("test1")
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13]; 

console.log("myEvery Result");
console.log(array1.myEvery(isBelowThreshold)); // expected output: true

console.log("every Result");
console.log(array1.every(isBelowThreshold));// expected output: true

console.log("test2")
function isBigEnough(element, index, array) {
    return element >= 10;
  }
  console.log("myEvery Result")
  console.log([12, 5, 8, 130, 44].myEvery(isBigEnough));   // false
  console.log([12, 54, 18, 130, 44].myEvery(isBigEnough)); // true

  console.log("every result")
{
  console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false
  console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true
}

console.log("test4")
function isSubset(array1, array2) {
  // returns true if array2 is a subset of array1
  
  return array2.myEvery(function (element) {
    return array1.includes(element);
  });
}

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
