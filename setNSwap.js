/*
Set myNumber to 4. Set myname to your nam. Now swap myNumber into myName & vice
versa*/
function setNSwap(){
  var myNumber = 42;
  var myName = "alex"
  var temp;
  var temp = 42;
  var myNumber = myName;
  var myName = temp
  console.log("myNumber is " + myNumber);
  console.log("myName is " + myName);

}
console.log(setNSwap());
