//give an array find unique items in the array using object
let arr=["a",'b','c','d','a','b'];
let unique={
};
for(i=0;i<arr.length;i++){
  //if value doesnot exist js will assign undefined
  if(unique[arr[i]]==undefined){
    unique[arr[i]]=1;
  }
  else{
    unique[arr[i]]++;
  }
}
for(let key in unique){
  if(unique[key]==1){
    console.log(key);
  }
}
