let input = prompt("Enter number of items : ")
let fibo = [];
let firstNum = 0;
let secondNum = 1;
let temp ;
function fibonacciGenerator(input){
  for(i=0;i<input;i++){
    if(input == 1){
      fibo.push(0)
    }
    else if(input == 2){
      fibo.push(0)
      fibo.push(1)
    }
    else{
      temp = firstNum + secondNum
      firstNum = secondNum;
      secondNum = temp;
      fibo.push(temp)
    }
  }
}

fibonacciGenerator(input);

let list = document.getElementById("fiboList");
for (i = 0; i < fibo.length; ++i) {
    let li = document.createElement('li');
    li.innerText = fibo[i];
    list.appendChild(li);
}