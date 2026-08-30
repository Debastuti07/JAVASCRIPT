const user={
    username:"megha",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage();
// user.username="tuti";
// user.welcomeMessage();
// console.log(this);//refers empty object in node env

// function chai(){
//     let username="megha";
//     console.log(this.username);//undefined we cant use this like than inside the function 
    
// }
// chai();

// const chai=function(){
//     let username="tuti";
//     console.log(this.username);//undefined 
    
// }
// chai();


const chai=()=>{
    let username="tuti";
    console.log(this.username);//undefined 
    
}

chai();

//arrow function 
const addTwo=(num1,num2)=>{
     return num1+num2;
}
console.log(addTwo(3,4));



const AddTwoNum=(num1,num2)=>  (num1+num2);//implicit return 

console.log(AddTwoNum(3,4));


const ObjImplicit=()=>({Username:"tuti"})//implicit use of object 

console.log(ObjImplicit());

