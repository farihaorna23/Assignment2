// INDEXOF //

/*
Description: 
indexOf() compares searchElement to elements of the Array using strict equality 
(the same method used by the === or triple-equals operator).

Parameters:
searchElement
Element to locate in the array.

fromIndex Optional
The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, 
which means the array will not be searched. If the provided index value is a negative number, 
it is taken as the offset from the end of the array. 

Note: if the provided index is negative, -----make sure u coded it right
the array is still searched from front to back. 
If the provided index is 0, then the whole array will be searched. Default: 0 (entire array is searched).

Return value
The first index of the element in the array; -1 if not found.
*/

Array.prototype.myIndexOf = function(searchElement, fromIndex=0) {

    if(fromIndex>= this.length)
    {
        return -1;
    }

        
        let res=fromIndex;
        
        if(fromIndex<0)
        {
           res=this.length+fromIndex;
        }

        res=Math.max(res,0); 
        
        for(let i=res; i<this.length; i++)
        {
    
            if(this[i]===searchElement)
            {
                return i;
            }
        
        }
    
    
    return -1;
    
};

console.log("test1")
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log("myIndexOf result")
console.log(beasts.myIndexOf('bison')); 
// expected output: 1

// start from index 2
console.log(beasts.myIndexOf('bison', 2));  
// expected output: 4

console.log(beasts.myIndexOf('giraffe')); 
// expected output: -1

console.log("test2")
var array = [2, 9, 9];
console.log(array.myIndexOf(2));     // 0
console.log(array.myIndexOf(7));     // -1
console.log(array.myIndexOf(9, 2));  // 2
console.log(array.myIndexOf(2, -1)); // -1
console.log(array.myIndexOf(2, -3)); // 0


