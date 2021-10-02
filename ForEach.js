// FOR EACH //



//applies function for each element in an array
//takes elemnt, index and array as parameters
//Return value= underdefined

//the array that is being used for testing
//const arr=[1,2,3] 

Array.prototype.myEach = function(callbackFn) {
   for(let i=0; i<this.length; i++)
   {
       if(this[i]===undefined) continue;
       callbackFn(this[i], i, this);
   }
};

/*
//test
console.log("the result for myEach is:")
arr.myEach((x,i,arr) => console.log(x,i,arr));
//prints out the element in the arr and its index
console.log("the result for forEach is:")
arr.forEach((x,i,arr) => console.log(x,i,arr));
*/