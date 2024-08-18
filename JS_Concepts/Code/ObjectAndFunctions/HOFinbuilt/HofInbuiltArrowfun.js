let array=[1,2,3,4,5,6];

let res=array.map((e)=>e*2).filter((e)=>e%2==0&&e<=10).reduce(((e,sum)=>sum=e+sum),0);

console.log(res);