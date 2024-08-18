function sum(a,b){
  return a+b;//returns a+b
}
function mul(a,b,c){
  let res=sum(a,b);//stores returned value from sum funtion
  console.log("multiplication using sum function",c*res);
}
mul(1,2,3);

//---------------------add all the prime numbers

function addPrime(number){
  let factor=0;
  for(let i=2;i<=number;i++){
    if(number%i==0){
      factor++;
    }
  }
  if(factor>1){
    return false;
  }
  else{
    return true     ;

  }
}

let primeSum=0;
 for(let i=1;i<=5;i++){
   if(addPrime(i)==true){
     primeSum=primeSum+i;
     console.log("prime number" , i)
   }
 }
console.log(primeSum)