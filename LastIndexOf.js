// LASTINDEXOF //
/*

Description: lastIndexOf compares searchElement to elements of the Array using strict equality 
(the same method used by the ===, or triple-equals, operator).

Parameters:
searchElement
Element to locate in the array.

fromIndex Optional
The index at which to start searching backwards. Defaults to the array's length minus one (arr.length - 1),
 i.e. the whole array will be searched. If the index is greater than or equal to the length of the array, 
 the whole array will be searched. If negative, it is taken as the offset from the end of the array. 
 
 Note that even when the index is negative, the array is still searched from back to front.--? 
 If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.--???

Return value
The last index of the element in the array; -1 if not found.
*/

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement, fromIndex) {
    
    let res = fromIndex || this.length - 1;
    
    if(fromIndex<0)
    {
        res=this.length+fromIndex;
    }

    if(res<0)
    {
        return -1;
    }

        for(let i=res; i>=0; i--)
        {
            if(searchElement===this[i])
            {
                return i;
            }
        }
    

    return -1;
    
};

console.log("test1")
var numbers = [2, 5, 9, 2];
console.log(numbers.myLastIndexOf(2));     // 3
console.log(numbers.myLastIndexOf(7));     // -1
console.log(numbers.myLastIndexOf(2, 3));  // 3
console.log(numbers.myLastIndexOf(2, 2));  // 0
console.log(numbers.myLastIndexOf(2, -2)); // 0
console.log(numbers.myLastIndexOf(2, -1)); // 3