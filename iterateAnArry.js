/*
Write a function that returns the sum of all the values within an array.
(e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)
*/

var arr = [-5,2,5,12];

function iterArr(arr) {
    //your code here
    var sum = 0;
   for (var i = 0; i <arr.length; i++)
   {
       sum = sum + arr[i];

   }
    return sum;
}
console.log(iterArr(arr));
