function reverseString(string){
  let bag='';
  let n =string.length-1;

  for(let i=n;i>=0;i--){
   bag=bag+string[i];  
  }
  return bag;
}

//reverseString('abc'));


//find weather element in array is palindrome or not
let array=["abc",'mom','dad','def']
for(let i=0;i<array.length;i++){
 let result= reverseString(array[i]);
  if(result==array[i]){
    console.log(array[i], "is a palindrome");
  }
  else{
    console.log(array[i],"is not a palindrome");
  }
}