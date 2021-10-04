// PUSH //
/*
Description: The push() method adds one or more elements to the end of an array and returns the new length of the array.
elementN
The element(s) to add to the end of the array.

Return value
The new length property of the object upon which the method was called.
*/

Array.prototype.myPush = function(...args) {
 let arg_i=0;
 let length=this.length; 

 for(let i=length; i<length+args.length; i++)
 {
    this[i]=args[arg_i];
    arg_i++;
 }

 return this.length; //the length of arr
};

/*
console.log("test1")
const arr=[1,2,3];
console.log("myPush result:")
console.log(arr.myPush(4,5,6));//6
console.log(arr);//should print [1,2,3,4,5,6]
console.log("Push result:")
console.log(arr.push(4,5,6));//9
console.log(arr);//should print [1,2,3,4,5,6,4,5,6]

console.log("test2")
const animals = ['pigs', 'goats', 'sheep'];

console.log("myPush result:")
const count = animals.myPush('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.myPush('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

*/



