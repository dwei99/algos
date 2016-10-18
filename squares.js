/*
Given an array with multiple values, write a function that replaces each value
 in the array with the product of the original value squared by itself.
 (e.g. [1,5,10,-2] will become [1,25,100,4])
*/

var arr = [2,10,30,5];
function squareVal(arr){
  //your code here
  var square = 0;
  for( var i = 0; i<arr.length; i++){
    square = Math.pow(arr[i],2); //could also use arr[i]*arr[i]
    arr[i] = square;
  }
  return arr;
}

console.log(squareVal(arr));
