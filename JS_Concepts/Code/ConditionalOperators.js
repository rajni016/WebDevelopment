let char="j"
if ((char==="a")||(char==="e")||(char==="i")||(char==="o")||(char==="u")){
  console.log("vowel in traditional if");
}
else{
  console.log("consonant in traditional ")
}

//using ternary statement (condition)
((char==='a')||(char==='e')||(char==='i')||(char==='o')||(char==='u'))?console.log("vowel in ternary"):console.log("consonant in ternary") ;


let num=10;

(num%2==0)?console.log("even"):console.log("odd");

let a=5000;
let b=200000;
let c=100;

if(a>b &&a>c){
  console.log("a is greater");
}
else if(b>c){
  console.log("b is greater");
}
else{
  console.log("c is greater");
}

//ternary opeartor
(a>b&&a>c)?console.log("ternary a"):(b>c)?console.log("b"):console.log("c") 