// SOME //

/*
Description:The some() method executes the callbackFn function 
once for each element present in the array until it finds the one where callbackFn 
returns a truthy value (a value that becomes true when converted to a Boolean). If such an element is found, some() immediately returns true. 
Otherwise, some() returns false. callbackFn is invoked only for indexes of the array with assigned values. -->???
It is not invoked for indexes which have been deleted or which have never been assigned values.-->

Parameters: element, index, array

Return value: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
*/



Array.prototype.mySome = function(callbackFn) {

    for(let i=0; i<this.length; i++)
    {
        if(this[i]===undefined) continue;{
        if(callbackFn(this[i],i, this)==true) 
        {
            return true;
        }
        }
 
    }

    return false;
};




//Test1
const array = [1, 2, 3, 4, 5];
console.log("test 1")
const even = (element) => element % 2 === 0;

console.log("The result for mySome:")
console.log(array.mySome(even)); // expected output: true
console.log("The result for Some:")
console.log(array.some(even)); // expected output: true

console.log("test2")

function isBiggerThan10(element) {
    return element > 10;
}
console.log([2, 5, 8, 1, 4].mySome(isBiggerThan10)); // false
console.log([2, 5, 8, 1, 4].some(isBiggerThan10));  // false
console.log([12, 5, 8, 1, 4].mySome(isBiggerThan10)); // true
console.log([12, 5, 8, 1, 4].some(isBiggerThan10)); // true

console.log("test3")
const fruits = ['apple', 'banana', 'mango', 'guava'];

console.log("The result for Some:");
function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}


console.log(checkAvailability(fruits, 'kela'));   // false
console.log(checkAvailability(fruits, 'banana')); // true

console.log("The result for mySome:");
function check(arr, val) {
    return arr.mySome(arrVal => val === arrVal);

  }

console.log(check(fruits, 'kela'));   // false
console.log(check(fruits, 'banana')); // true




