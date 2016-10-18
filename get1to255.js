/*
Write a function that returns an array with all the numbers from 1 to 255.
*/
function get_array() {
    var arr = [];
    for(var i =1; i<=255; i++) {
    var x = i;
    arr.push(x)
    }
    return arr;
}

console.log(get_array());
