/*

Description: The reduce() method executes a user-supplied “reducer” callback function on each element of the array, 
passing in the return value from the calculation on the preceding element. 
The final result of running the reducer across all elements of the array is a single value.
Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array.
The reducer walks through the array element-by-element, at each step adding the current array value to the 
result from the previous step (this result is the running sum of all the previous steps) 
— until there are no more elements to add.

Parameters:
callbackFn
A “reducer” function that takes four arguments:

previousValue (the value resulting from the previous call to callbackfn)
currentValue (the value of the current element)
currentIndex Optional
array (the array to traverse) Optional

initialValue Optional
A value to which previousValue is initialized the first time the callback is called. 
If initialValue is specified, that also causes currentValue to be initialized to the first value in the array. 
If initialValue is not specified, previousValue is initialized to the first value in the array, 
and currentValue is initialized to the second value in the array.

Return value
The value that results from running the “reducer” callback function to completion over the entire array.

Exceptions
Throws a TypeError if the array contains no elements and initialValue is not provided.

*/

// REDUCE //
Array.prototype.myReduce = function(callbackFn,initialValue) {
  
    if(this.length==0 && initialValue==undefined)
    {
        throw new TypeError("Reduce is an empty array with no initial value")
    }

    if(initialValue!==undefined)
   {
    
    let result=initialValue;
    for(let i=0; i<this.length; i++)
    {
    result=callbackFn(result,this[i], i, this);
       
    }
    return result;
   }

   if(initialValue===undefined)
   {
       let result=this[0];

       for(let i=1; i<this.length; i++)
       {
       result=callbackFn(result,this[i], i, this);
          
       }
    return result;
   }
      
};

/*
console.log("test1")
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.myReduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.myReduce(reducer, 5));
// expected output: 15

console.log("test2")
const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
console.log([1, 100].myReduce(getMax, 50)); // 100
console.log([    50].myReduce(getMax, 10)); // 50

// callback is invoked once for element at index 1
console.log([1, 100].myReduce(getMax));     // 100

// callback is not invoked
console.log([    50].myReduce(getMax));     // 50
console.log([      ].myReduce(getMax, 1));  // 1

console.log([      ].myReduce(getMax));     // TypeError
*/