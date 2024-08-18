function convertSpace(String){
  let bag="";
  
  for(let i=0;i<String.length;i++){
    if(String[i]==" "){
      bag=bag+'-';
    }
  
   else{
      bag=bag+String[i];
    }
  }
  return bag;
}

console.log(convertSpace('Hello World JS'));

function pushStringToArray(Str){
  let array=[];
  let bag='';
  for(let i=0;i<Str.length;i++){
    if(Str[i]!=' '){
      bag=bag+Str[i];
    }
    else{
      array.push(bag);
      bag='';
    }
  }
  array.push(bag);
  return array;
}

console.log(pushStringToArray('Hello World JS'));