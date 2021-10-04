// KEYS //

/*
Description: The Object.keys() method returns an array of a given object's own enumerable property names, 
iterated in the same order that a normal loop would.

Parameters
obj
The object of which the enumerable's own properties are to be returned.

Return value
An array of strings that represent all the enumerable properties of the given object.
*/


Object.grabKeys = function(obj) {

    const arr=[];

    for(const i in obj)
    {
      arr.push(i);
    }

    return arr;
};

console.log("test1")
// simple array
const arr = ['a', 'b', 'c'];
console.log(Object.grabKeys(arr)); // console: ['0', '1', '2']

// array-like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.grabKeys(obj)); // console: ['0', '1', '2']

// array-like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.grabKeys(anObj)); // console: ['2', '7', '100']