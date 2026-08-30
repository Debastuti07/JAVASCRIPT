//if statement
const isUserLoggedIn=true;
const temperature=41;
if(temperature<50){
   console.log("temperature is less than 50");
   
}else{
console.log("temperature is greater than 50");
}
// 2=="2" true
// 2==="2" false
// <, >, <=, >=, ==, !=, ===

const score =200
if(score>100){
   let power ="fly"
   console.log((`user power: ${power}`));
}


const balance=1000;
// if(balance>500) console.log("test"),
// console.log("test2");//reduce readability


if(balance<500)
{
   console.log("less the 500");
   
}

else if(balance<750)
{
   console.log("less than 750");
   
}
else if(balance<900){
   console.log("less than 900");
   
}
else{
   console.log("less than 1200");
   
}

const userLoggedIn=true;
const debitCard=true;
const loggenInFromGoogle=false;
const loggenInFromEmail=true;

if(userLoggedIn && debitCard && 2==2){
   console.log("allow to buy courses");
   
}
if(loggenInFromEmail || loggenInFromGoogle)
{
   console.log("user logged in");
   
} 