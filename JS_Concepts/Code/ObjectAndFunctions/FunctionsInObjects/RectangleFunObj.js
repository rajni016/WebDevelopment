let object={
  area: function(length,breadth){
     return length*breadth;
  },
  perimeter: function(l,b){
    return 2*(l+b);
  }
}
console.log(object.area(2,2));

console.log(object.perimeter(2,2));



let rect={

   length:10,
  breadth:10,
  area: function(){   
  return  this.length * this.breadth ;
  },
  perimeter: function(){
    console.log(2*(this.length + this.breadth));
  },
}
console.log(rect.area());
rect.perimeter();