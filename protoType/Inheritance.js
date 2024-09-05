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
//knowing the proto type 
console.log(child.__proto__);
console.log(child.__proto__.__proto__);
console.log(Father.__proto__);
console.log(grandParent.__proto__)
// object has protype of null
console.log(grandParent.__proto__.__proto__)
