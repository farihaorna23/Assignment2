// INCLUDES //
/*
Description: The includes() method determines whether an array includes a 
certain value among its entries, returning true or false as appropriate.

Pararmeters: 
searchElement
The value to search for.

fromIndex Optional
The position in this array at which to begin searching for searchElement.

The first element to be searched is found at fromIndex for positive values of fromIndex, 
or at arr.length + fromIndex for negative values of fromIndex 
(using the absolute value of fromIndex as the number of elements from the end of the array at which to start the search)

Return value: A boolean value which is true if the value searchElement is found within the array 
(or the part of the array indicated by the index fromIndex, if specified).
*/

Array.prototype.myIncludes = function(searchElement, fromindex=0) {
  
    
    let res=fromindex;

    if(res<0)
    {
        res=this.length+fromindex;
    }
    
    res=Math.max(res,0)

    for(let i=res; i<this.length; i++)
    {
        if(this[i]===searchElement)  
        {
            return true;
        }
    }

    return false;
};

//Test
const array1 = [1, 2, 3];
const pets = ['cat', 'dog', 'bat'];
console.log("test1")
console.log("Result for myIncludes:")
console.log(array1.myIncludes(1,0)); //true
console.log(array1.myIncludes(1,1)); //false  
console.log(array1.myIncludes(5)); //false
console.log(pets.myIncludes('cat'));//true
console.log(pets.myIncludes('at'));//false
// expected output: false

console.log("test3")
console.log("myinclude result")
console.log([1, 2, 3].myIncludes(2))         // true 
console.log([1, 2, 3].myIncludes(4))         // false
console.log([1, 2, 3].myIncludes(3, 3))      // false
console.log([1, 2, 3].myIncludes(3, -1))     // true
console.log(["1", "2", "3"].myIncludes(3))   // false

console.log("test4")
let arr = ['a', 'b', 'c']

console.log("myIncludes result")
console.log(arr.myIncludes('a', -100)) // true
console.log(arr.myIncludes('b', -100)) // true
console.log(arr.myIncludes('c', -100)) // true
console.log(arr.myIncludes('a', -2))   // false









