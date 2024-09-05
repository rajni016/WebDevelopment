function Student(firstName,lastName){
    this.studentFirstName=firstName;
    this.studentLastName=lastName
}

Student.prototype.country="ZEW";
Student.prototype.technology="Developer";

Student.prototype.sayHi=()=>console.log("saying Hi");


Student.prototype.createProtype= function (){
    console.log("proType created")};



const Student1=new Student("ZEN","Z");

console.log(Student1);

console.log(Student1.sayHi());

console.log(Student1.country);

console.log(Student1.createProtype());