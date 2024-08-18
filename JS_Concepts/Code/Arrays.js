//Find number of String elements in Array
let a=[1,2,2,"a",'b','c',true];
let j=0;
for(let i=0;i<a.length;i++){
  if(typeof(a[i])==typeof("")){
    j++;
  }
}
console.log(j);

//
let b=[1,2,2,"a",'b','c','d',true];
let k=0;
for(let i=0;i<b.length;i++){
  if(typeof(b[i])=='string'){
    k++;
  }
}
console.log(k);

///Convert char into Caps
let char="d";
let lower=['a','b','c','d'];
let upper=['A','B','C','D'];
for(let i=0;i<lower.length;i++){
  if(lower[i]===char){
    console.log(upper[i]);
    break;
  }
}

//given an array of number fnd the average of even numbers
let num=[1,2,3,4,5]
let sum=0;
let r=0;
for(let i=0;i<num.length;i++){
  if(num[i]%2==0){
    sum=sum+num[i]; 
    r++;
    
  }
}
console.log(sum/j);

///reverse  an array
let arr=[1,2,3,4]

for(let i=arr.length-1;i>=0;i--){
  console.log(arr[i]);
}