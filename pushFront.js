/* Algorithm that pushes value passed into the front of the array*/

function pushFront(arr,value){
   for(var index = arr.length; index > 0; index--)
   {
     arr[index] = arr[index -1];
   }
   arr[0] = value;
    return arr;
}

var arr = [42,30,6,7,100];

console.log(pushFront(arr,555));
