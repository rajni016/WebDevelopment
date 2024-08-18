//forEach just loops through the elements in an array
let array=[1,2,3,4,5,6,6]

let res=array.forEach(function(a){
  console.log(a)
});
console.log(res);



let shortRes=array.forEach((a)=>console.log(a));

console.log(shortRes);