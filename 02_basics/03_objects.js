//singleton 
// Object.create

//object literals 
const mySym= Symbol("key1");

const JsUser={
    name:"Megha",//name => key 
    "full name":"Debastuti De",
    [mySym]:"mykey1",
    age:18,
    location:"Kolkata",
    email:"abc@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","Saturday"]
};

console.log(JsUser.email);
// console.log(JsUser[email]);//not valid 
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email="xyz@gmail.com"
// Object.freeze(JsUser);// cant change anymore

JsUser.email="cde@gmail.com";
console.log(JsUser);// cant change the email here 

JsUser.greeting=function(){
    console.log("hello js user");
    
}
JsUser.greetingTwo=function(){
    console.log(`hello js user ${this.name}`);
    
}
console.log(JsUser.greeting);
console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo()); 

