//all higher order inbuilt functions are used only for arrays
//----------------
//Reduce- takes array and always return single element and takes initial function
//takes two arguments function and initial value
let array=[1,2,3,4,5,6,7,8,9]

let redSum=array.reduce((sum, element)=>{
  sum=sum+element
  return sum;
},0);

console.log("traditional sum " ,redSum);

//using short hand notation

let shortSum=array.reduce((sum,element)=>(sum=sum+element),0);
console.log("short sum",shortSum)

//--------------------------------
//map function will return the array with original length passed

let tradMap=array.map(function(element){
  return element*2;
});

console.log("trad map", tradMap);

///short hand 
let shortDouble=array.map((element)=>(element*2));

console.log("short hand double  map", shortDouble);

//-------------------------------
//filter will return array but length of returned will changes based on the condition

let TradFilter=array.filter(function(element){
  return element%2==0;
})
console.log("Traditionl notation odd number filter",TradFilter );
//short hand notation
//no flower brackets, no need to add return statements
let shortFilter=array.filter((element)=>(element%2==1))

console.log("short hand notation odd number filter",shortFilter );