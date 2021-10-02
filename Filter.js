// FILTER //

/*
Description: filter() calls a provided callbackFn function once for each element in an array, 
and constructs a new array of all the values for which callbackFn returns a value that coerces to true. 

callbackFn
Function is a predicate, to test each element of the array. 
Return a value that coerces to true to keep the element, or to false otherwise.

Parameters:
element, index, array 

Return Value: A new array with the elements that pass the test. 
If no elements pass the test, an empty array will be returned.
*/

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const filtered = [12, 5, 8, 130, 44];

Array.prototype.myFilter = function(callbackFn) {
    const arr=[];

    for(let i=0; i<this.length; i++)
    {
        if(this[i]===undefined) continue;
        {
            callbackFn(this[i], i, this);
        
            if(callbackFn(this[i], i, this)==true) //should I put the if condition   if(this[i]===undefined) continue;
            {
            
            arr.push(this[i]); 
            }
        }
      
    }

    return arr; 
};

//Test
console.log("the result for myFilter is:");
let result= words.myFilter((x)=> (x.length> 6));
console.log(result);
//[ 'exuberant', 'destruction', 'present' ]

console.log("the result for myFilter is:");
let result1= filtered.myFilter((x)=> (x>10));
console.log(result1);

console.log("the result for filter is:");
console.log(words.filter((x)=>(x.length> 6)));

console.log("the result for filter is:");
console.log(filtered.filter((x)=>(x> 10)));
// filtered is [12, 130, 44]

