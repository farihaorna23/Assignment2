//Map//

/*Description: map calls a provided callbackFn function once for each element in an array, 
in order, and constructs a new array from the results. callbackFn is invoked only for indexes 
of the array which have assigned values.

Parameters: element, index, array

Return Value: A new array with each element being the result of the callback function.
*/


const array1 = [1, 4, 9, 16];
Array.prototype.myMap = function(callbackFn) {
    const arr=[];
    for(let i=0; i<this.length; i++)
    {
      if(this[i]===undefined) continue;{ //---okay to use?
        arr.push(callbackFn(this[i], i, this));
      }
    }
  return arr;
};

//Test
console.log("The result for myMap is:");
let result= array1.myMap((x,i,array1)=>(x*2)); //are they taking the other parameters because index and array1 are not highlighted.
console.log(result);
//[ 2, 8, 18, 32 ]

console.log("The result for myMap is:");
let result1= array1.myMap((x,i,array1)=>(x+3)); 
console.log(result1);
//[ 4, 7, 12, 19 ]

console.log("The result for Map is:");
console.log(array1.map((x,i,array1)=>(x*2))); 
//[ 2, 8, 18, 32 ]

console.log("The result for Map is:");
console.log(array1.map((x,i,array1)=>(x+3))); 
//[ 4, 7, 12, 19 ]


