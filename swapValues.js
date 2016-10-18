/*
Write a function that will swap the first and last values of any given array.
The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become
[-2,5,10,1]).
*/

var arr = [1,5,10,-2];

function swap(arr){
  //your code
  var arrnew = arr;
  var first =0; //will contain the value of the first position of array
  var last = 0; //will contain the value of the last position of array
  var i = 0;
  first = arr[i];
  last = arr[arr.length-1];
  arr[i] = last;
  arr[arr.length-1] = first;

  return arrnew;

}
console.log(swap(arr));
