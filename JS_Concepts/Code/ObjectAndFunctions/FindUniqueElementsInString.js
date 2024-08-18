//print unique elements in string using object
let name="mahesh";
let object = {};

for(let i=0;i<name.length;i++){
  if(object[name[i]]==undefined){
      object[name[i]]==1;
  }
  else{   
      object[name[i]]++;
  }
}
for(let key in object){
  console.log(key);
}