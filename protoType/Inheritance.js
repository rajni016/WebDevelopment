let grandParent={
    name:"grandParent",
    lastName:"don",
    bloodGroup:"o+"
}

let Father=Object.create(grandParent);
Father.name="fatherName"
Father.place="F";

let child=Object.create(Father);
child.name="ChildName"
child.place="C"


console.log(Father.name + " "+ Father.place + " "+Father.lastName);
console.log(child.name + " "+ child.place + " "+child.lastName);


//hasOwnProperty
console.log(child.hasOwnProperty("name"));
console.log(child.hasOwnProperty("lastname"));
console.log(Father.hasOwnProperty("lastname"));
console.log(grandParent.hasOwnProperty("lastName"));
