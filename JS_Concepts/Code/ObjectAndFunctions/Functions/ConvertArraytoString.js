let array=[1,2,3];
let n=array.length;

function convertToString(array,n){
  let result="";
  for(i=0;i<n;i++){
    result=result+array[i];
  }
 return result;
}
console.log(convertToString(array,n))