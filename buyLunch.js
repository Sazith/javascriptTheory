let arr = ["Angela", "Ben", "Jenny", "Micheal", "Chloe"];
let num = 0;
function whosPaying() {
   num =(Math.floor((Math.random()*4)))+1;
  // alert( arr[1] + " is going to pay the bill");
  // console.log(name[num]);
  // console.log(name[num]);
  console.log(num);
}

whosPaying();
alert( arr[num] + " is going to pay the bill");