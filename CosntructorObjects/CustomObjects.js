
//batch name and technology is same for every student

function studentDetails(name,age){
    this.personName=name;
    this.personAge=age;
    this.personBatch="core Batch";
    this.technology="Developer"

}


let student1=new studentDetails("zen",18);
let student2=new studentDetails("hen",20);

console.log(student1);

console.log(student2);