// write a function to print each and every element inside this array

let object={
  name:'abc',
  array:["a",'b','c','d'],
  print : function() {
    for(let i=0;i<this.array.length;i++){
      console.log(this.array[i]);
    }
  }
}

object.print();
console.log(object.name)