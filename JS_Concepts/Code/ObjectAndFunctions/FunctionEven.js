function checkEven(num){

  if(num%2==0){
    return true;
  }
  else{
    return false;
  }
  
}



for(let i=0;i<=10;i++){
let res=checkEven(i);
  console.log("Is ", i ," a even number ?", res);
}
//find count of even numbers in an array
let array=[1,3,4,5,6,7,8]
let count=0;
for(let i=0;i<=array.length;i++){
let res=checkEven(array[i]);
  //boolean is 
  if(res){
    count ++;
  }
}
console.log("count of even numbers :", count)

