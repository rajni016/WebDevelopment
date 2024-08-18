//function declartion

function sum1(){
  let a=1;
  let b=2;
  console.log(a+b);
}
//function call
sum1();
//function sum with parameters
function sum(a,b){
  console.log(a+b);
}
sum(22,22);

//function to check if a number is even or not
function checkNumber(number){
  if(number%2==0){
    console.log(number ,"is even");
  }
  else{
    console.log(number ," is odd");
  }
}
for(let i=0;i<10;i++){
  checkNumber(i);
}

///function to check if number is prime or not
let number=13;
let factor=0;
for(i=2;i<number;i++){
  if(number%i==0){
    factor++
  }
}
(factor>1)?console.log(number,"is not a prime"):console.log(number,"is prime");