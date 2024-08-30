let student1={
    name:"zen",
    age:20,
    batch:"A"
}

let student2={
    name:"zen",
    age:28,
    batch:"b"
}
let student3={
    name:"zen",
    age:19,
    batch:"C"
}

function addingDetails(city,state){
    this.studentCity=city;
    this.studentState=state;
}

//call,apply, bind

addingDetails.call(student1,"Fort","sc");
//in apply, values must be passed through array
addingDetails.apply(student2,["trou","mi"]);

//bind wil always return a function
// to assign the values to existing object we need to call the returned function
let s3fun=addingDetails.bind(student3,"Ark","nc");

s3fun();


console.log(student1);
console.log(student2);
console.log(student3);




