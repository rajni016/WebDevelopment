Object={
  array:["goku","gohan","luggy",'naruto'],
  revFun: function(string){
    let bag='';
    for(let i=0;i<=string.length-1;i++){    
      bag=string[i]+bag
    }
    this.revArray.push(bag);
    
  },
  revArray:[]
}


for(let i=0;i<Object.array.length;i++){
   Object.revFun(Object.array[i])
}
console.log(Object["revArray"])