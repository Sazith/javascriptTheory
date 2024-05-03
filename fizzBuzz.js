let arr = [];
let num = 1;
function fizzBuzz(){
  if(num % 3 == 0 && num % 5 == 0){
    arr.push("FizzBuzz");
    num++;
  }else{
    if(num % 3 == 0){
      arr.push("Fizz");
      num++;
    }
    else{
      if(num % 5 == 0){
        arr.push("Buzz");
        num++;
      }
      else{
        arr.push(num++);
      }
    }
  }
  // arr.push(num++);
  // console.log(arr);
}
storeArr=[];
for (let index = 0; index < 50; index++) {
  fizzBuzz();
  // console.log( fizzBuzz());
}
console.log(arr);

// document.getElementById('content').innerHTML = arr;

//create a html list using js
let list = document.getElementById("fizzList");
for (i = 0; i < arr.length; ++i) {
    let li = document.createElement('li');
    li.innerText = arr[i];
    list.appendChild(li);
}
