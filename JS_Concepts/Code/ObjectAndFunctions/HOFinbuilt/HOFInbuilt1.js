
//map double the array
//original array didnot change, takes only one ip argument
//just returns new array with the same length as original array
let array=[0,2,3,4,5,6,10,20]

let mapRes=array.map((element)=>element*2)
console.log("arrow map double ", mapRes)

//filter out even numbers and less than 10
//original array didnot change, takes only one ip argument
//just returns new array with length based on conditions
let res=mapRes.filter((element)=>element<=10 &&element%2==0);
console.log("arrow even", res);

 let res1=mapRes.filter((element)=>{
  return element<=10 &&element%2==0;
   
 });

console.log("annonymous even", res1);

///add  even numbers
//reduce takes 2 inputs(one is function and another is initial value, returns single element
//argument 1=
//(sum,element)=>sum=sum+element)
//argument=0, which is assigned to sum in function 
let sumR=res1.reduce((sum,element)=>sum=sum+element,0);

console.log("Sum of even numbers, arrow " ,sumR);

//argument 1=
/*function(sum,element){
  return sum=sum+element
} */ 
//argument=0, which is assigned to sum in function 
let sumR1=res1.reduce(function(sum,element){
  return sum=sum+element
},0);

console.log("Sum of even numbers, traditional", sumR1)


///above all the lines can be written


let Singlelineres=array.map((e)=>e*2).filter((e)=>e%2==0&&e<=10).reduce(((sum,element)=>sum=element+sum),0);

console.log("singline code ", Singlelineres);