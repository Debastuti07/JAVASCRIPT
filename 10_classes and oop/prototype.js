let myHeros=["thor","spiderman"];

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function () {
        console.log(`spider power is ${this.spiderman}`);
        
    }
}
Object.prototype.megha=function(){
    console.log("megha is present in all object");
    
}
Array.prototype.Heymegha=function(){
    console.log(`megha says hello`);
    
};
myHeros.Heymegha();
// heroPower.Heymegha();  
// heroPower.megha();
// myHeros.megha();


//Inheritance
const user={
    name:"tuti",
    email:"abc@gmail.com"
}
const teacher={
    makevdo:true
}

const teachingSupport ={
    isAvailable:false
}
const TAsupport ={
    makeassignment:'js assignment',
    fullTime:true,
    __proto__:teachingSupport
}

teacher.__proto__=user


//mordern syntax

Object.setPrototypeOf(teachingSupport,teacher)


let anotherUsername="debastuti           "
String.prototype.trueLength=function(){
    console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
    
}
anotherUsername.trueLength();
"megha".trueLength();