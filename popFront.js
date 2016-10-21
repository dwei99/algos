/* Algorithm to pop value from the front of the input array
*/

var arr = [1,100,34,7];
function insertAt (arr, value, index) {
for (var i = arr.length; i>index; i--) {
  arr[i] = arr[i - 1];
}
  arr[index] = value;
  return arr;
}
console.log(insertAt(arr,7,2));
