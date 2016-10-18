var arr = [1,2,3,4,5];
function findAvg(arr) {
    //your code here
    var avg = 0;
    for (var i =0; i<arr.length; i++){
        avg += arr[i];
    }
    avg = avg/arr.length
    return avg;
}
console.log(findAvg(arr));
