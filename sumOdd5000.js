/*
Write a function that returns the sum of all the odd numbers from 1 to 5000.
(e.g. 1+3+5+...+4997+4999)
*/
function sum_odd_5000() {
    var sum = 0;
    //your code here
    for (var i =1; i<=5000; i++)
    {
        if( i % 2 ==1)
        {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(sum_odd_5000());
