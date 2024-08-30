

function studentDetails(name,age,place){
    //personName, personAge,personPlace are the keys and this keyword is used to point to the custom object created or refer to the object
    this.personName=name;
    this.personAge=age;
    this.personPlace=place;
    //using of this mentions it is a constructor
    //using this key word we can access 
}
//new keyword creates the objects (student1,student2,student3)
let student1=new studentDetails("arshad",1,"sel");

let student2=new studentDetails("warsi",2,"kal");

let student3=new studentDetails("nag",2898,"zin");

console.log(student1);
console.log(student2);
console.log(student3);



