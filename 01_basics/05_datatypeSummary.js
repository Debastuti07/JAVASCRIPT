//premitive
//7 types : String ,Number ,Boolean ,Null ,undefined, symbol ,BigInt

const score=100;
const scorefloat=100.35;
const booleanscore=false;
const temp=null;
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);//false

const bigNumber=123456789454678992356n;
console.log(typeof bigNumber);//BigInt 

//reference type (non premitive) 
//Array,objects ,functions 

const heros=["tuti","stuti","megha"];
let myObj={
    name:"tuti",
    age:21

}

const myfunction=function(){
    console.log("hello world");
    
}

console.log(typeof heros);//object 
console.log(typeof myfunction);//function


//js is dynamically typed language because
// don't have to declare the data type of a variable, and its type can change at runtime.



//***************************** */

//stack(premitive)=> gets the copy    , Heap(non-premitive)=> gets the  changes in original one 

let myName="tuti";
let anotherName=myName;
anotherName="megha";
console.log(myName);
console.log(anotherName);


let userOne={
    email:"user@google.com",
    upi:"tuti@123"
};
let userTwo=userOne;

userTwo.email="megha@google.com";
console.log(userOne.email);
console.log(userTwo.email);
