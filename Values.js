// VALUES //

/*
Description: The Object.values() method returns an array of a given object's own enumerable property values, 
in the same order as that provided by a for...in loop. 
(The only difference is that a for...in loop enumerates properties in the prototype chain as well.)

Parameters
obj
The object whose enumerable own property values are to be returned.

Return value
An array containing the given object's own enumerable property values.
*/


Object.grabValues = function(obj) {
const arr=[];

for(const i in obj)
{
  arr.push(obj[i]) ;
}

return arr;
};

console.log("test1")
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
console.log(Object.grabValues(object1));
// expected output: Array ["somestring", 42, false]

console.log("test2")
const obj = { foo: 'bar', baz: 42 };
console.log(Object.grabValues(obj)); // ['bar', 42]

// Array-like object
const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.grabValues(arrayLikeObj1 )); // ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.grabValues(arrayLikeObj2 )); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
const my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.grabValues(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.grabValues('foo')); // ['f', 'o', 'o']

