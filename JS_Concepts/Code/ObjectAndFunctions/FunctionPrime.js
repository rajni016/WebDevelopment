function CheckPrime(number){
  let factor =0;
  for(let i=2;i<=number;i++){
    if(number%i==0){
      factor ++;
    }
  }
  (factor>1)?console.log(number,"is not a prime"):console.log(number, "is a prime");
}
for(let i=1;i<=20;i++){
  CheckPrime(i);
}