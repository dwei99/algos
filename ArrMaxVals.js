/*
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.

exmaples
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39],
[1000, 1001, 857, 1]]) should return [5,27,39,1001].
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [
1000, 1001, 857, 1]]) should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39],
[1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
*/
var arr = [[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]];

function largestOfFour(arr){
 var arrnew = [0,0,0,0]; //array to store largest value of the paramater arrays

 for (var i=0; i<arr.length; i++){
   for( var j=0; j<arr[i].length; j++){ //the for loop for the sub-array utilizes array from i to contorl loop (ie. arr[i] == 4)

     if (arrnew[i]< arr[i][j]){
       arrnew[i] = arr[i][j];
   }

   }
 }
  return arrnew;
}

console.log(largestOfFour(arr));
