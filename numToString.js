/*
Write a function that takes an array of numbers and replaces any negative values
within the array with the string 'Dojo'. For example if array = [-1,-3,2], your
unction will return ['Dojo','Dojo',2].
*/

var arr = [-1,-3,2];

function numToStr(arr){
  //your code here
  for(var i =0; i<arr.length;i++){
    if(arr[i]< 0){
      arr[i] = 'Dojo';
    }
  }
    return arr;
}
console.log(numToStr(arr));
