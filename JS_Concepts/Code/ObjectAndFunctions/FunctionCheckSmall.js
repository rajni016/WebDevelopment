function checkSmall(char){
  let result=false;
  let str="abcdefghijklmnopqrstuvwxyz"
  for(let i=0;i<=str.size;i++){
    if(char==i){
      result= true;
      break;
    }  
  }
 return result;  
}
let res=checkSmall("e");
console.log(res);