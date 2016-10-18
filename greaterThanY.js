/*
Given value of Y, write a function that takes an array and returns the number of
values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3,
 your function will return 2. (There are two values in the array greater than 3,
  which are 5, 7).
*/

var arr = [28,1,35,2,7,10,2,4];
var Y = 15;
function greaterY(arr, Y) {
    //your code here
    var count = 0;

    for (var i =0; i<arr.length;i++){
      if (arr[i] > Y){
        count++;
      }
    }
    return count;
}
console.log(greaterY(arr,Y));
