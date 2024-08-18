
//addEvenNumber is higher order Function
//arrayEven is call back function
function arrayEven(a){
 let array = [];
   for(let i=0;i<a.length;i++){
     if(a[i]%2==0){
       array.push(a[i]);
     }
   }
  return array;
}

//let result=arrayEven([1,2,3,4,5,6]);

//console.log(result);
//-------------------------

function addEvenNumber(EvenFun,array){
  let evenArray=  EvenFun(array);//returns array with even number from above function
    let sum=0;
  //looping over returned array 
  for(let i=0;i<evenArray.length;i++){
    sum=sum+ar[i];
  }
  console.log(evenArray);
  console.log(sum);
  
}

//passing function as argument to another function
addEvenNumber(arrayEven,[1,2,3,4,5,6,7,8,9])